//eqArrays function to check arrays:
const eqArrays = requires('./eqArrays');
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = i; j <= i; j++) {
//       if (array1[i] !== array2[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
//Object checker:
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } 
  return true;
};

module.exports = eqObjects;