const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, unauthorizedUserError } = require('../../utils/auth');
const db = require('../../db/models');

const router = express.Router();

// POST /api/likes
router.post('/', requireAuth, asyncHandler(async (req, res, next) => {
    const likes = await db.Like.findAll({
        where: req.body,
    });

    if (!likes.length) {
        await db.Like.create(req.body);
    }

    const returnStory = await db.Story.findByPk(req.body.storyId, {
        include: [
            {
                model: db.User,
                include: db.Role,
            },
            db.Like,
        ],
    });

    res.json(returnStory);
}));

// Like Not Found Error
const LikeNotFoundError = () => {
    const err = Error(`Like could not be found.`);
    err.title = "Like not found.";
    err.status = 404;
    return err;
};

// DELETE /api/likes/:id
router.delete('/', requireAuth, asyncHandler(async (req, res, next) => {
    const likes = await db.Like.findAll({
        where: req.body,
    });

    if (likes.length) {
        const like = await db.Like.findOne({
            where: req.body,
        });

        await like.destroy();
    } else {
        next(LikeNotFoundError());
    }

    const returnStory = await db.Story.findByPk(req.body.storyId, {
        include: [
            {
                model: db.User,
                include: db.Role,
            },
            db.Like,
        ],
    });

    res.json(returnStory);
}));

module.exports = router;
