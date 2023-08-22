// Authentication controller
//imports
const express = require('express');
const router = express.Router();
const { Op, where } = require('sequelize');
const users = require('../../models/users');
const bcrypt = require('bcryptjs');

//starter class controller
class Authcontroller {
  // register method
  static async Register(req, res) {
    try {
      const { name, email, password } = req.body;
      const reponse = await users.findAll();
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const user = {
        name,
        email,
        password: hashedPassword,
      };
      users.create(user);
      res.status(200).json({ mensage: 'register complete' });
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
        console.log('login completed');
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
}

module.exports = Authcontroller;
