const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    for (let j = i; j <= i; j++) {
      if (array1[i] !== array2[j]) {
        return false;
      }
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  let message = `🛑️🛑️🛑️${actual} !== ${expected}`;
  if (eqArrays) {
    console.log(`Assertion Passed:✅️✅️✅️ ${actual} === ${expected}`);
  }
  console.assert(actual === expected, message);
};
  

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); 