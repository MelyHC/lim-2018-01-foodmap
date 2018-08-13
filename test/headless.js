global.window = global;
global.assert = require('chai').assert;
global.fixtures = require('../data-restaurant/restaurants.json');
require('../src/data-rest');
require('./data-rest.spec.js');