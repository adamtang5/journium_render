const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, unauthorizedUserError } = require('../../utils/auth');
const db = require('../../db/models');

const router = express.Router();

// POST /api/comments
router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const comment = await db.Comment.create(req.body);

    const returnComment = await db.Comment.findByPk(comment.id, {
        include: {
            model: db.User,
            include: db.Role,
        },
    });
    res.json(returnComment);

}));

// Comment Not Found Error
const commentNotFoundError = id => {
    const err = Error(`Comment with id of ${id} could not be found.`);
    err.title = "Comment not found.";
    err.status = 404;
    return err;
};

// PUT /api/comments/:id
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(commentId);

    if (comment) {
        if (req.user.id === comment.userId) {
            await comment.update({
                content: req.body.content,
            });
            const returnComment = await db.Comment.findByPk(commentId, {
                include: {
                    model: db.User,
                    include: db.Role,
                },
            });
            res.json(returnComment);
        } else {
            next(unauthorizedUserError());
        }
    } else {
        next(commentNotFoundError(commentId));
    }
}));

// DELETE /api/comments/:id
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(id);

    if (comment) {
        if (req.user.id === comment.userId) {
            await comment.destroy();
            res.status(204).end();
        } else {
            next(unauthorizedUserError());
        }
    } else {
        next(commentNotFoundError(id));
    }
}));

module.exports = router;
