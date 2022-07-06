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
        console.log("========req.file.originalname==========", req.file.originalname);
        // console.log("========filename==========", req.body.get("filename"));
        // console.log("========file==========", req.body.get("file"));
        const newImageUrl = await singlePublicFileUpload(req.file);
        // console.log("newImageUrl: ", newImageUrl);

        return res.json({
            imageUrl: newImageUrl,
            originalName: req.file.originalname,
        });
    }));

module.exports = router;
