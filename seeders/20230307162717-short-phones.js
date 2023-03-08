'use strict';

const { ShortPhones } = require('../models');

const fs = require('fs/promises');
const path = require('path');

// Directory where JSON files are stored
const filePath = path.join(path.dirname(__dirname), 'public/phones.json');

const phones = [];

const readJsonFile = async () => {
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    for (const phone of data) {
      phone.createdAt = new Date();
      phones.push(phone);
    }
  } catch (err) {
    console.error(err);
  }
};

const initPhones = async () => {
  await readJsonFile();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await initPhones();
    await queryInterface.bulkInsert(ShortPhones.tableName, phones, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(ShortPhones.tableName, null, {});
  },
};
