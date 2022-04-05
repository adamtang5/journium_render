const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { Story } = require('../../db/models');

const router = express.Router();

// GET /api/stories
router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const stories = await Story.findAll();

    return res.json({ stories });
}));

// GET /api/stories/:storyId
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const story = await Story.findByPk(id);

    return res.json({ story });
}))

module.exports = router;
