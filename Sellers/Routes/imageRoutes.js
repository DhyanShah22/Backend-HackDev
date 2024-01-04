const express = require('express')
const { upload } = require('../upload')
const { postImage } = require('../Controllers/imageControllers')

const router = express.Router()

router.post('/', upload.single("image"), postImage)

module.exports = router