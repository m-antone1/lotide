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

const without = function(source, itemsToRemove) {
  const cleanedSource = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = i; j <= i; j++) {
      if (source[i] !== itemsToRemove[j]) {
        cleanedSource.push(source[i]);
      }
    }
  }
  return cleanedSource;
}
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]))
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));