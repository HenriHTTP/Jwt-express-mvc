// middleware login
const express = require('express');
const router = express.Router();
const { Op, where } = require('sequelize');
const users = require('../models/users');
const bcrypt = require('bcryptjs');

const LoginAuthentication = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ where: { email: email } });

    if (!user) {
      console.log('usuario invalido');
      return;
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      console.log('senha invalida');
      return;
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = LoginAuthentication;
