'use strict';

const express = require('express');

const { router:  phonesRouter } = require('./src/routes/phones');

const { phonesService } = require('./src/services/phones')


function createServer() {
  const app = express();

  app.use('/phones', phonesRouter);
  phonesService.reset();

  return app;
}

module.exports = {
  createServer,
};
