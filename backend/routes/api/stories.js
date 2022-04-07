const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
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

module.exports = router;
