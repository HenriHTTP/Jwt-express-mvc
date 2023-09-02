const express = require('express');
const router = express.Router();
const RoutesAuthentication = require('../middlewares/authRoutesMidlleware');
const PostController = require('../controllers/posts/PostController');
const PostAthentication = require('../middlewares/PostMiddleware');

router.get('/dashboard', RoutesAuthentication, PostController.RenderDashboard);
router.get(
  '/create/post',
  RoutesAuthentication,
  PostController.RenderCreatePost,
);
router.post(
  '/create/post',
  RoutesAuthentication,
  PostAthentication,
  PostController.CreatePost,
);

module.exports = router;
