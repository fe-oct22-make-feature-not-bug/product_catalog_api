'use strict';

const { ShortPhones } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      ShortPhones.tableName,
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        category: {
          type: Sequelize.STRING,
        },
        phoneId: {
          type: Sequelize.STRING,
        },
        itemId: {
          type: Sequelize.STRING,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        priceRegular: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        priceDiscount: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
        },
        screen: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        capacity: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING,
        },
        ram: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        year: {
          type: Sequelize.INTEGER,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
      {
        updatedAt: false,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ShortPhones.tableName);
  },
};
