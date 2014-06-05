var filter = require('lodash.filter');
var forEach = require('lodash.foreach');
var isBoolean = require('lodash.isboolean');
var isNumber = require('lodash.isnumber');

/**
 * Narrows down fusion engines based on information lying around the lab.
 *
 * @param {String} [element] Element written down on the spiral notebook
 * @param {Number} [tubes] Number of tubes written down on the clipboard
 * @param {Boolean} [psiGreaterThan5783] Pressure on computer is higher than 5783
 * @return {Array} possible engines
 * @api public
 */
function bigOil(element, tubes, psiGreaterThan5783) {
  if (isNumber(element)) {
    if (isBoolean(tubes)) {
      psiGreaterThan5783 = tubes;
    }
    tubes = element;
  }

  if (isBoolean(element)) {
    psiGreaterThan5783 = element;
  }

  if (isBoolean(tubes)) {
    psiGreaterThan5783 = tubes;
  }

  var engines = [
    {num: 1, can: 1, hyd: 1, bar: 375},
    {num: 2, can: 2, hyd: 1, bar: 500},
    {num: 3, can: 3, hyd: 2, bar: 400},
    {num: 4, can: 1, hyd: 2, bar: 400},
    {num: 5, can: 2, hyd: 2, bar: 300},
    {num: 6, can: 3, hyd: 2, bar: 450},
    {num: 7, can: 3, hyd: 3, bar: 375},
    {num: 8, can: 1, hyd: 3, bar: 275},
    {num: 9, can: 2, hyd: 3, bar: 375},
    {num: 10, can: 3, hyd: 3, bar: 400},
    {num: 11, can: 1, hyd: 3, bar: 425},
    {num: 12, can: 2, hyd: 3, bar: 510}
  ];

  switch (element) {
    case 'nitrogen':
      engines = filter(engines, {can: 1});
      break;
    case 'deterium':
      engines = filter(engines, {can: 2});
      break;
    case 'helium':
      engines = filter(engines, {can: 3});
      break;
  }

  switch (tubes) {
    case 1:
      engines = filter(engines, {hyd: 1});
      break;
    case 2:
      engines = filter(engines, {hyd: 2});
      break;
    case 3:
      engines = filter(engines, {hyd: 3});
      break;
  }

  switch (psiGreaterThan5783) {
    case true:
      engines = filter(engines, function(engine) {
        return engine.bar * 14.5037738 > 5783;
      });
      break;
    case false:
      engines = filter(engines, function(engine) {
        return engine.bar * 14.5037738 < 5812;
      });
      break;
  }

  var possibilities = [];
  forEach(engines, function(value) {
    possibilities.push(value.num);
  });
  return possibilities;
}

module.exports = bigOil;