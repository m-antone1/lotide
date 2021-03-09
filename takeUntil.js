// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, callback) => {
  let output = [];
  for (elem of array) {
    if (!callback(elem)) {
      output.push(elem);
    } 
    if (callback(elem)) {
      break;
    }
  }
  return output;
};

module.exports = takeUntil