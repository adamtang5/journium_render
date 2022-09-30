const express = require('express');
const asyncHandler = require('express-async-handler');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

const { requireAuth, unauthorizedUserError } = require('../../utils/auth');

const router = express.Router();

// POST /api/storage
router.post('/',
    requireAuth,
    singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
        const newImageUrl = await singlePublicFileUpload(req.file);

        return res.json({
            imageUrl: newImageUrl,
            originalName: req.file.originalname,
        });
    }));

module.exports = router;
