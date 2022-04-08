const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, unauthorizedUserError } = require('../../utils/auth');
const db = require('../../db/models');

const router = express.Router();

// POST /api/comments
router.post('/', requireAuth, asyncHandler(async (res, req) => {
    console.log(req.body);
    const { userId, storyId, content } = req.body;
    const comment = await db.Comment.create({
        userId,
        storyId,
        content,
    });

    const returnComment = await db.Comment.findByPk(comment.id, {
        include: {
            model: db.User,
            include: db.Role,
        },
    });
    res.json(returnComment);

}));

module.exports = router;
