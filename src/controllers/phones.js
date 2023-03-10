'use strict';

const phonesService = require('../services/phones');

const getAll = (req, res) => {
  const pageNumber = req.query.page || 1;
  const pageItems = req.query.items || 16;

  phonesService.getAll(pageNumber, pageItems).then((phones) => {
    res.send(phones);
  });
};

const getOne = (req, res) => {
  const { phoneId } = req.params;
  phonesService
    .findById(phoneId)
    .then((foundPhone) => {
      if (!foundPhone) {
        res.sendStatus(404);

        return;
      }

      res.send(foundPhone);

      return foundPhone;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getNew = (req, res) => {
  phonesService.getNew().then((phones) => res.send(phones));
};

const getHot = (req, res) => {
  phonesService.getHot().then((phones) => res.send(phones));
};

module.exports = {
  getAll,
  getOne,
  getNew,
  getHot,
};
