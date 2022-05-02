const express = require('express');
const createController = require('../controllers/createController');

const router = express.Router();

router
  .post('/', createController.create);

module.exports = { router };