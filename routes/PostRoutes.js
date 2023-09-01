const express = require('express');
const router = express.Router();
const RoutesAuthentication = require('../middlewares/authRoutesMidlleware');
const PostController = require('../controllers/posts/PostController');

router.get('/dashboard', RoutesAuthentication, PostController.RenderDashboard);

module.exports = router;
