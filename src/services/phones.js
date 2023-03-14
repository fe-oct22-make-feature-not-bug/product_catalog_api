'use strict';

const { Sequelize } = require('sequelize');
const { ShortPhones } = require('../../models');

async function getAll(pageNumber, pageItems, sortBy) {
  const offset = (pageNumber - 1) * pageItems;

  const totalCount = await ShortPhones.count();

  const order = [];

  switch (sortBy) {
    case 'newest':
      order.push(['year', 'DESC']);
      break;
    case 'alphabetically':
      order.push(['name', 'ASC']);
      break;
    case 'cheapest':
      order.push(['priceDiscount', 'ASC']);
      break;
    default:
      order.push(['createdAt', 'DESC']);
  }

  const items = await ShortPhones.findAll({
    order: order,
    limit: pageItems,
    offset: offset,
  });

  const totalPages = Math.ceil(totalCount / pageItems);

  return {
    items,
    totalPages,
  };
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
