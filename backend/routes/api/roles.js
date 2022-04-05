const express = require('express');
const asyncHandler = require('express-async-handler');

const { Role } = require('../../db/models');

const router = express.Router();

// GET /api/roles
router.get('/', asyncHandler(async (req, res) => {
    const roles = await Role.findAll();

    return res.json({ roles });
}));

module.exports = router;
