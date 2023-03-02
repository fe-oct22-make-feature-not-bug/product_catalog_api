'use strict';

const { Phone } = require('../models/phone');

Phone.sync({ force: true });
