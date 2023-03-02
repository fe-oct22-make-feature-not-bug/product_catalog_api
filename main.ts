'use strict';

import express = require('express');
import cors = require('cors');

import { Phone } from './models/';


const app = express();


const f = async () => {
  const phones = await Phone.findAll();

  return phones;
};

f().then((data) => {
  console.log(data);
});

app.use(cors());
app.use(express.json());

app.use('/products', (req, res) => {
  console.log(req.query);

  res.end();
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
