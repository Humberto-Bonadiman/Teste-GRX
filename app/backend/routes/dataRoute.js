const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router
  .post('/', dataController.create);

module.exports = { router };