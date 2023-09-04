const express = require('express');
const router = express.Router();
const LikesController = require('../controllers/like/likeController');

router.post('/like', LikesController.CreateLike);

module.exports = router;
