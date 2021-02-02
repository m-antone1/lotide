const assertEqual = function(actual, expected) {
  let message = `${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, message);
};
const tail = function(actual) {
  let myTail = actual;
  return myTail.tail;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);