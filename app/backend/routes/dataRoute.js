const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router
  .post('/', dataController.create);

router
  .get('/', dataController.getAll);

module.exports = { router };