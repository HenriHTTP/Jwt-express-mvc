// Post controller
const express = require('express');
const posts = require('../../models/posts');
const { Op, where } = require('sequelize');
const users = require('../../models/users');

class PostController {
  // render dashboard

  static RenderDashboard(req, res) {
    try {
      const bodyComponent = 'components/dashboard';
      const title = 'Create Posts';
      res.render('main', { title, bodyComponent });
    } catch (err) {
      res.json({ mensage: `error: ${err} ` });
    }
  }
}

module.exports = PostController;
