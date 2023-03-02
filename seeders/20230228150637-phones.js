'use strict';

const { Phone } = require('../models');

const fs = require('fs/promises');
const path = require('path');

// Directory where JSON files are stored
const directoryPath = path.join(path.dirname(__dirname), 'public/phones');

const phones = [];

const readJsonFiles = async () => {
  // Read all files in the directory
  const files = await fs.readdir(directoryPath, (err) => {
    if (err) {
      console.log('Error reading directory: ' + err);
      return;
    }
  });

  // Loop through each file
  for (const file of files) {
    // Check if the file is a JSON file
    if (path.extname(file) === '.json') {
      // Load the JSON data from the file
      try {
        const jsonData = await fs.readFile(
          path.join(directoryPath, file),
          'utf-8'
        );
        const data = JSON.parse(jsonData);
        Object.assign(data, { createdAt: new Date() });
        data.description = JSON.stringify(data.description);
        phones.push(data);
      } catch (e) {
        console.error(`Error parsing JSON file ${file}: ${e}`);
      }
    }
  }
};

const initPhones = async () => {
  await readJsonFiles();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await initPhones();
    await queryInterface.bulkInsert(Phone.tableName, phones, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(Phone.tableName, null, {});
  },
};

// Data for check if record inserts the db
// [
//   {
//     id: 'apple-iphone-11-128gb-white',
//     namespaceId: 'apple-iphone-11',
//     name: 'Apple iPhone 11 128GB Black',
//     capacityAvailable: [ '64GB', '128GB', '256GB' ],
//     capacity: '128GB',
//     priceRegular: 1100,
//     priceDiscount: 1050,
//     colorsAvailable: [ 'black', 'green', 'yellow', 'white', 'purple', 'red' ],
//     color: 'black',
//     images: [
//       'img/phones/apple-iphone-11/black/00.jpg',
//       'img/phones/apple-iphone-11/black/01.jpg',
//       'img/phones/apple-iphone-11/black/02.jpg',
//       'img/phones/apple-iphone-11/black/03.jpg',
//       'img/phones/apple-iphone-11/black/04.jpg'
//     ],
//     description: JSON.stringify([
//         { title: 'And then there was Pro', text: [
//           "A transformative triple-camera system that adds tons of capability without complexity.",
//           "An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
//         ] },
//         { title: 'Camera', text: [
//           "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
//         ] },
//         {
//           title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
//           text: [
//             "iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."
//           ]
//         }
//       ]),
//     screen: "6.1' IPS",
//     resolution: '1792x828',
//     processor: 'Apple A13 Bionic',
//     ram: '4GB',
//     camera: '12 Mp + 12 Mp + 12MP',
//     zoom: 'Digital, 5x',
//     cell: [ 'GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE' ],
//     createdAt: new Date()
//   }
//  ]
