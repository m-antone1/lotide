const assertEqual = function(actual, expected) {
  let message = `${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, message);
};
const head = function(actual) {
  let answer = actual[0];
  return answer;
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");