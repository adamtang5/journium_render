const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, oneOf } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const db = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('displayName')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a name with at least 4 characters.'),
    check('displayName')
        .not()
        .isEmail()
        .withMessage('Name cannot be an email.'),
    oneOf([
        check('avatarUrl')
            .isEmpty(),
        check('avatarUrl')
            .isURL()
            .withMessage('Avatar URL must be valid URL.'),
    ]),
    check('roleId')
        .exists({ checkFalsy: true })
        .withMessage('Please choose a valid role.'),
    handleValidationErrors,
];

// Sign up: POST /api/users
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, displayName, avatarUrl, roleId } = req.body;

    const user = await db.User.signup({
        email,
        password,
        displayName,
        avatarUrl,
        roleId,
    });

    await setTokenCookie(res, user);

    return res.json({ user });
}));

// GET /api/users/:id
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await db.User.scope('currentUser').findByPk(id);
    return res.json({ user });
}));

// GET /api/users/:id/likes
router.get('/:id(\\d+)/likes', requireAuth, asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id);
    let likes = await db.Likes.findAll({
        where: {
            userId,
        },
    });

    likes = likes.map(like => like.storyId);
    return res.json({ likes });
}));

module.exports = router;
