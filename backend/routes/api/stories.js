const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth, unauthorizedUserError } = require('../../utils/auth');
const db = require('../../db/models');

const router = express.Router();

// GET /api/stories
router.get('/', asyncHandler(async (req, res) => {
    const stories = await db.Story.findAll({
        include: {
            model: db.User,
            include: db.Role,
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

// GET /api/stories/:id
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(id, {
        include: {
            model: db.User,
            include: db.Role,
        },
    });

    return res.json({ story });
}));

// POST /api/stories
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const story = await db.Story.create(req.body);

    const returnStory = await db.Story.findByPk(story.id, {
        include: {
            model: db.User,
            include: db.Role,
        },
    });
    res.json(returnStory);

}));

// PUT /api/stories/:id
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);

    if (story) {
        if (req.user.id === story.userId) {
            const { userId, title, content, imageUrl, videoUrl } = req.body;
            await story.update({
                title, content, imageUrl, videoUrl,
            });
            const returnStory = await db.Story.findByPk(storyId, {
                include: {
                    model: db.User,
                    include: db.Role,
                },
            });
            res.json(returnStory);
        } else {
            next(unauthorizedUserError());
        }
    } else {
        next(storyNotFoundError(storyId));
    }
}));

// DELETE /api/stories/:id
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(id);

    if (story) {
        if (req.user.id === story.userId) {
            await story.destroy();
            res.status(204).end();
        } else {
            next(unauthorizedUserError());
        }
    } else {
        next(storyNotFoundError(id));
    }
}));

// GET /api/stories/:id/comments
router.get('/:id(\\d+)/comments', asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(id);

    if (story) {
        const comments = await db.Comment.findAll({
            where: {
                storyId: id,
            },
            include: {
                model: db.User,
                include: db.Role,
            },
        });

        res.json(comments);
    } else {
        next(storyNotFoundError(id));
    }
}))

module.exports = router;
