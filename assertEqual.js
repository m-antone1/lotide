const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} `);
  }
};

assertEqual("March", "cohort");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("fun", "Fun");



// !!! THIS IS CODE FROM MY FIRST COHORT THAT AM STORING FOR COMPARISON !!!
// const assertEqual = function(actual, expected) {
//   let message = `🛑️🛑️🛑️${actual} !== ${expected}`;
//   if (actual === expected) {
//     console.log(`Assertion Passed:✅️✅️✅️ ${actual} === ${expected}`);
//   }
//   console.assert(actual === expected, message);
// };



// module.exports = assertEqual;