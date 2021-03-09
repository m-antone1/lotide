// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑️🛑️🛑️Assertion Failed: ${actual} !== ${expected} `);
//   }

// };
const countLetters = function (letters) {
  const result = {};
  for(const letter of letters) {
    if (letter !== '') {
      if (result.hasOwnProperty(letter)) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  } return result;
}

module.exports = countLetters;