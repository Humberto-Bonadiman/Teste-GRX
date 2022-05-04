const express = require('express');
const dataController = require('../controllers/dataController');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router
  .use(authMiddleware.emptyAnswers)
  .use(authMiddleware.answerSize)
  .post('/', dataController.create);

module.exports = { router };