// Authentication controller
//imports
const express = require('express');
const router = express.Router();
const { Op, where } = require('sequelize');
const users = require('../../models/users');
const bcrypt = require('bcryptjs');
const session = require('express-session');

//starter class controller
class Authcontroller {
  // register method
  static async Register(req, res) {
    try {
      const { name, email, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const user = {
        name,
        email,
        password: hashedPassword,
      };
      const createdUser = await users.create(user);
      req.session.userid = createdUser.id;
      req.session.username = createdUser.name;
      res.redirect('/');
    } catch (err) {
      res.json({ mensage: `error: ${err} ` });
    }
  }
  // render form register
  static RenderRegister(req, res) {
    try {
      const bodyComponent = 'components/register';
      const title = 'Register';
      res.render('main', { title, bodyComponent });
    } catch (err) {
      console.log(err);
    }
  }
  //login
  static async Login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await users.findOne({ where: { email: email } });
      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (user && passwordMatch) {
        req.session.userid = user.id;
        req.session.username = user.name;
        res.redirect('/');
      }
    } catch (err) {
      res.status(400).json({ message: `erro ${err}` });
    }
  }
  // render login
  static RenderLogin(req, res) {
    try {
      const bodyComponent = 'components/login';
      const title = 'login';
      res.render('main', { title, bodyComponent });
    } catch (err) {
      console.log(err);
    }
  }
  //logout
  static async Logout(req, res) {
    try {
      req.session.destroy();
      res.redirect('/login');
    } catch (err) {
      res.status(500).json({ message: `error : ${err}` });
    }
  }
}

module.exports = Authcontroller;
