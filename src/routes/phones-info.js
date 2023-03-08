'use strict';

const express = require('express');
const phonesInfoController = require('../controllers/phones-info');

const router = express.Router();

router.get('/', phonesInfoController.getAll);
router.get('/:phoneId', phonesInfoController.getOne);

module.exports = {
  router,
};
