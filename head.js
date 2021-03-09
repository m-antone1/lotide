// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const head = function (myHead) {
  return myHead[0];
}

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head(['one']), 1);


// !!! THIS IS CODE FROM MY FIRST COHORT THAT I AM STORING FOR COMPARISON !!!
// const assertEqual = require('./assertEqual');
// const head = function(actual) {
//   let answer = actual[0];
//   return answer;
// }

module.exports = head;