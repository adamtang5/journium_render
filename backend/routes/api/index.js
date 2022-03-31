const router = require('express').Router();

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition',
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));

module.exports = router;
