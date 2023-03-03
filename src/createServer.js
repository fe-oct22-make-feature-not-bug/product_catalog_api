'use strict';

const express = require('express');
const cors = require('cors');

const { router: phonesRouter } = require('../src/routes/phones');

function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/phones', phonesRouter);

  return app;
}

module.exports = {
  createServer,
};
