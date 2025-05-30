const mongoose = require('mongoose');
const express = require('express');
const Router = express.Router();
const authentication = require('../middleware/auth')
const authController = require('../controllers/authController');

Router.post('/register', authController.register);

Router.post('/login', authController.login);

module.exports = Router ;