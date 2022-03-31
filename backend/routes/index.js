const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

/* Test route during development
GET /hello/world
router.get('/hello/world', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});
*/

router.use('/api', apiRouter);

module.exports = router;
