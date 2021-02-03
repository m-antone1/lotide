const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i > arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

}
const assertArraysEqual = function(actual, expected) {
  let message = `${actual} !== ${expected}`;
  if (eqArrays) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, message);
};

