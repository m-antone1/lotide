const assertEqual = require('./assertEqual');
const head = function(actual) {
  let answer = actual[0];
  return answer;
}

module.exports = head;