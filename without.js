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

module.exports = without;