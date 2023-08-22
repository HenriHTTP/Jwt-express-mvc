const express = require('express');
const router = express.Router();
const { Op, where } = require('sequelize');
const users = require('../models/users');
const bcrypt = require('bcryptjs');

const RegisterAuthentication = async (req, res, next) => {
  try {
    const { email, name, password, confirmpassword } = req.body;
    if (password != confirmpassword) {
      return;
    }
    if (!name || !password || !confirmpassword || !email) {
      return;
    }
    const checkIfUserExists = await users.findOne({ where: { email: email } });
    if (checkIfUserExists) {
      return;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = RegisterAuthentication;
