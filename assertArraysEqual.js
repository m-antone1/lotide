const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let message = `🛑️🛑️🛑️${actual} !== ${expected}`;
  if (eqArrays) {
    console.log(`Assertion Passed:✅️✅️✅️ ${actual} === ${expected}`);
  }
  console.assert(actual === expected, message);
};
  

module.exports = assertArraysEqual;