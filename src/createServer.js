'use strict';

const express = require('express');
const cors = require('cors');

const { router: phonesRouter } = require('../src/routes/phones');
const { router: phonesInfoRouter } = require('../src/routes/phones-info');

function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/phones', phonesRouter);
  app.use('/phones-info', phonesInfoRouter);

  return app;
}

module.exports = {
  createServer,
};
