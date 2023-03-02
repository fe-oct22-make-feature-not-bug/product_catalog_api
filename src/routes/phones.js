'use strict';

const express = require('express');
const phonesController = require('../controllers/phones');

const router = express.Router();

router.get('/', phonesController.getAll);
router.get('/:phoneId', express.json(),phonesController.getOne);

module.exports = {
  router,
};
