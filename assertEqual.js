const assertEqual = function(actual, expected) {
  let message = `🛑️🛑️🛑️${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`Assertion Passed:✅️✅️✅️ ${actual} === ${expected}`);
  }
  console.assert(actual === expected, message);
};



module.exports = assertEqual;