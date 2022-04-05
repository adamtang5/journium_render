const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const rolesRouter = require('./roles');
const storiesRouter = require('./stories');

/*
Testing user auth middlewares

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

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth');
router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user);
});

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth');
router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
});
*/

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/roles', rolesRouter);

router.use('/stories', storiesRouter);

/*
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});
*/

module.exports = router;
