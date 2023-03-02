'use strict';

import express = require('express');
import cors = require('cors');

import { router as phonesRouter } from './routes/phones';

import phonesService = require('./services/phones');

const app = express();

function createServer() {

  app.use('/phones', phonesRouter);
  phonesService.reset();

  app.use(cors());

  return app;
}

module.exports = {
  createServer,
};

// const f = async () => {
//   const phones = await Phone.findAll();

//   return phones;
// };

// f().then((data) => {
//   console.log(data);
// });

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/products', (req, res) => {
//   console.log(req.query);

//   res.end();
// });

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
