const express = require('express');
const { createGallery, getGallery, getGalleries } = require('../controllers/galleryController');

const router = express.Router();

router.post('/create', createGallery);
router.get('/getOne', getGallery);
router.get('/get/:id', getGalleries);

module.exports = router;