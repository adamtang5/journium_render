const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

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
    handleValidationErrors,
];

// Sign up: POST /api/users
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, displayName, avatarUrl, roleId } = req.body;
    const user = await User.signup({
        email,
        password,
        displayName,
        avatarUrl,
        roleId,
    });

    await setTokenCookie(res, user);

    return res.json({ user });
}));

module.exports = router;
