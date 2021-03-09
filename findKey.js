const findKey = function(object, callback) {
  let objKeys = Objects.keys(objects);
  for (let key of objKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};
module.exports = findKey;