'use strict';

const { Sequelize } = require('sequelize');
const { ShortPhones } = require('../../models');

function getAll() {
  return ShortPhones.findAll({
    order: ['createdAt'],
  });
}

function findById(phoneId) {
  return ShortPhones.findByPk(phoneId);
}

function getNew() {
  return ShortPhones.findAll({
    order: ['createdAt'],
    limit: 10,
  });
}

function getHot() {
  return ShortPhones.findAll({
    order: Sequelize.literal('("fullPrice" - "price") DESC'),
    limit: 10,
  });
}

module.exports = {
  getAll,
  findById,
  getNew,
  getHot,
};
