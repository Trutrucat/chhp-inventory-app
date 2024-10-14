// models/index.js
const user = require('./user');
const inventory = require('./inventory');
const walkinrefrigerator = require('./walkinrefrigerator');
const walkinfreezer = require('./walkinfreezer');
const beer = require('./beer');
const kitchen = require('./kitchen');
const storeRoom = require('./storeroom');
const diningArea = require('./diningarea');

module.exports = {
  user,
  inventory,
  walkinrefrigerator,
  walkinfreezer,
  beer,
  kitchen,
  storeRoom,
  diningArea,
};