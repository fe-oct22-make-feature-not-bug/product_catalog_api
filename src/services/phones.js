'use strict';

const { Sequelize } = require('sequelize');
const { Phone } = require('../../models');

function getAll() {
  return Phone.findAll({
    order: ['createdAt'],
  });
}

function findById(phoneId) {
  return Phone.findByPk(phoneId);
}

function getNew() {
  return Phone.findAll({
    order: ['createdAt'],
    limit: 10,
  });
}

function getHot() {
  return Phone.findAll({
    order: Sequelize.literal('("priceRegular" - "priceDiscount") DESC'),
    limit: 10,
  });
}

module.exports = {
  getAll,
  findById,
  getNew,
  getHot,
};
