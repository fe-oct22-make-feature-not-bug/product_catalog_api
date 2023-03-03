'use strict';

const { Phone } = require('../../models');


function getAll() {
  return Phone.findAll({
    order: ['createdAt'],
  });
}

function findById(phoneId) {
  return Phone.findByPk(phoneId);
}

module.exports = {
  getAll,
  findById,
};
