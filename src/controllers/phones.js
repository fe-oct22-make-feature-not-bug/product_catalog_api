'use strict';

const phonesService = require('../services/phones');

const getAll = (req, res) => {
  const phones = phonesService.getAll();

  res.send(phones);
};

const getOne = (req, res) => {
  const { phoneId } = req.params;
  const foundPhone = phonesService.findById(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.send(foundPhone);
};

module.exports = {
  getAll,
  getOne,
};
