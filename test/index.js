var bigOil = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(bigOil));
});

test('returns full array when passed no arguments', function(t) {
  t.plan(1);
  t.deepEqual(bigOil(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('cans', function(t) {
  t.plan(3);
  t.deepEqual(bigOil('nitrogen'), [1, 4, 8, 11]);
  t.deepEqual(bigOil('deterium'), [2, 5, 9, 12]);
  t.deepEqual(bigOil('helium'), [3, 6, 7, 10]);
});

test('tubes', function(t) {
  t.plan(3);
  t.deepEqual(bigOil(1), [1, 2]);
  t.deepEqual(bigOil(2), [3, 4, 5, 6]);
  t.deepEqual(bigOil(3), [7, 8, 9, 10, 11, 12]);
});

test('pressure', function(t) {
  t.plan(2);
  t.deepEqual(bigOil(true), [2, 3, 4, 6, 10, 11, 12]);
  t.deepEqual(bigOil(false), [1, 3, 4, 5, 7, 8, 9, 10]);
});

test('cans + tubes', function(t) {
  t.plan(9);
  t.deepEqual(bigOil('nitrogen', 1), [1]);
  t.deepEqual(bigOil('nitrogen', 2), [4]);
  t.deepEqual(bigOil('nitrogen', 3), [8, 11]);
  t.deepEqual(bigOil('deterium', 1), [2]);
  t.deepEqual(bigOil('deterium', 2), [5]);
  t.deepEqual(bigOil('deterium', 3), [9, 12]);
  t.deepEqual(bigOil('helium', 1), []);
  t.deepEqual(bigOil('helium', 2), [3, 6]);
  t.deepEqual(bigOil('helium', 3), [7, 10]);
});

test('cans + pressure', function(t) {
  t.plan(6);
  t.deepEqual(bigOil('nitrogen', true), [4, 11]);
  t.deepEqual(bigOil('nitrogen', false), [1, 4, 8]);
  t.deepEqual(bigOil('deterium', true), [2, 12]);
  t.deepEqual(bigOil('deterium', false), [5, 9]);
  t.deepEqual(bigOil('helium', true), [3, 6, 10]);
  t.deepEqual(bigOil('helium', false), [3, 7, 10]);
});

test('tubes + pressure', function(t) {
  t.plan(6);
  t.deepEqual(bigOil(1, true), [2]);
  t.deepEqual(bigOil(2, true), [3, 4, 6]);
  t.deepEqual(bigOil(3, true), [10, 11, 12]);
  t.deepEqual(bigOil(1, false), [1]);
  t.deepEqual(bigOil(2, false), [3, 4, 5]);
  t.deepEqual(bigOil(3, false), [7, 8, 9, 10]);
});

test('cans + tubes + pressure', function(t) {
  t.plan(18);
  t.deepEqual(bigOil('nitrogen', 1, true), []);
  t.deepEqual(bigOil('nitrogen', 1, false), [1]);
  t.deepEqual(bigOil('nitrogen', 2, true), [4]);
  t.deepEqual(bigOil('nitrogen', 2, false), [4]);
  t.deepEqual(bigOil('nitrogen', 3, true), [11]);
  t.deepEqual(bigOil('nitrogen', 3, false), [8]);
  t.deepEqual(bigOil('deterium', 1, true), [2]);
  t.deepEqual(bigOil('deterium', 1, false), []);
  t.deepEqual(bigOil('deterium', 2, true), []);
  t.deepEqual(bigOil('deterium', 2, false), [5]);
  t.deepEqual(bigOil('deterium', 3, true), [12]);
  t.deepEqual(bigOil('deterium', 3, false), [9]);
  t.deepEqual(bigOil('helium', 1, true), []);
  t.deepEqual(bigOil('helium', 1, false), []);
  t.deepEqual(bigOil('helium', 2, true), [3, 6]);
  t.deepEqual(bigOil('helium', 2, false), [3]);
  t.deepEqual(bigOil('helium', 3, true), [10]);
  t.deepEqual(bigOil('helium', 3, false), [7, 10]);
});
