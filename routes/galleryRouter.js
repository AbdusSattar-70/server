const express = require('express');
const { createGallery, getGallery, getGalleries } = require('../controllers/galleryController');

const router = express.Router();

router.post('/create', createGallery);
router.get('/getAll', getGalleries);
router.get('/get/:id', getGallery);

module.exports = router;