const middle = function(arr) {
  let midArr = [];
  if(arr.length <= 2) {
      return midArr;
  } 
  let index = arr.length / 2;
  if(arr.length % 2 === 0) {
      midArr.push(arr[index - 1], arr[index])
  } else {
      midArr.push(arr[Math.floor(index)])
  }
  return midArr;
}
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
