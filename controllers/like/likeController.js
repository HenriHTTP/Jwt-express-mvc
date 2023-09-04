const express = require('express');
const likes = require('../../models/like');
const { Op, where } = require('sequelize');

class LikesController {
  static async CreateLike(req, res) {
    try {
      const like = {
        postId: req.body.postId,
        userId: req.body.userId,
      };
      await likes.create(like);
      res.redirect('/home');
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = LikesController;
