const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, unauthorizedUserError } = require('../../utils/auth');
const db = require('../../db/models');

const router = express.Router();

// POST /api/likes
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const like = await db.Like.create(req.body);

    const returnLike = await db.Like.findByPk(like.id, {
        include: {
            model: db.User,
            include: db.Role,
        },
    });
    res.json(returnLike);
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
    const like = await db.Like.findAll({
        where: req.body,
    });

    if (like.length === 1) {
        if (req.user.id === like[0].userId) {
            await db.Like.destroy({
                where: req.body,
            });
            res.status(204).end();
        } else {
            next(unauthorizedUserError());
        }
    } else {
        next(LikeNotFoundError());
    }
}));

module.exports = router;
