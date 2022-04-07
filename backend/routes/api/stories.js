const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth, unauthorizedUserError } = require('../../utils/auth');
const { Story, User, Role } = require('../../db/models');

const router = express.Router();

// GET /api/stories
router.get('/', asyncHandler(async (req, res) => {
    const stories = await Story.findAll({
        include: {
            model: User,
            include: Role,
        },
    });

    return res.json({ stories });
}));

// Story Not Found Error
const storyNotFoundError = id => {
    const err = Error(`Story with id of ${id} could not be found.`);
    err.title = "Story not found.";
    err.status = 404;
    return err;
};

// GET /api/stories/:storyId
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const story = await Story.findByPk(id, {
        include: {
            model: User,
            include: Role,
        },
    });

    return res.json({ story });
}));

// POST /api/stories
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const story = await Story.create(req.body);
    res.json(story);
}));

// PUT /api/stories/:id
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await Story.findByPk(storyId);

    if (story) {
        if (req.user.id === story.userId) {
            const { userId, title, content, imageUrl, videoUrl } = req.body;
            await story.update({
                title, content, imageUrl, videoUrl,
            });
            res.json({ story });
        } else {
            next(unauthorizedUserError());
        }
    } else {
        next(storyNotFoundError(storyId));
    }
}));

module.exports = router;
