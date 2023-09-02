// Import necessary modules and models
const express = require('express');
const posts = require('../../models/posts');
const { Op, where } = require('sequelize');
const users = require('../../models/users');

class PostController {
  // Render the dashboard page

  static RenderDashboard(req, res) {
    try {
      const bodyComponent = 'components/dashboard';
      const title = 'Dashboard';
      res.render('main', { title, bodyComponent });
    } catch (err) {
      res.json({ mensage: `error: ${err} ` });
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
}

module.exports = PostController;
