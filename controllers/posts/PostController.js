// Import necessary modules and models
const express = require('express');
const posts = require('../../models/posts');
const { Op, where } = require('sequelize');
const users = require('../../models/users');

class PostController {
  // Render the dashboard page

  static async RenderDashboard(req, res) {
    try {
      const userId = req.session.userid;
      const title = 'Dashboard';

      const dashboardPosts = await posts.findAll({
        where: {
          userId,
        },
      });
      const bodyComponent = 'components/dashboard';
      res.render('main', {
        title,
        bodyComponent,
        dashboardPosts: dashboardPosts,
      });
    } catch (err) {
      res.json({ message: `error: ${err} ` });
    }
  }

  // Render the create post page

  static RenderCreatePost(req, res) {
    try {
      const bodyComponent = 'components/post';
      const title = 'Create!';
      res.render('main', { title, bodyComponent });
    } catch (err) {
      res.json({ mensage: `error: ${err} ` });
    }
  }

  // Create a new post

  static async CreatePost(req, res) {
    try {
      const post = {
        title: req.body.title,
        userId: req.session.userid,
      };
      await posts.create(post);
      res.redirect('/home');
    } catch (err) {
      return err;
    }
  }
  static async RemovePost(req, res) {
    try {
      const foundPost = await posts.findByPk(req.body.id);
      await foundPost.destroy();
      res.redirect('/dashboard');
    } catch (err) {
      res.status(500).json({ mensage: `error ${err}` });
    }
  }
}

module.exports = PostController;
