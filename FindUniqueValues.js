// 1st way
// const findUniqueValues = (arr) => {
//   return [...new Set(arr)];
// };

// customIncludes
Array.prototype.customIncludes = function (val) {
  console.log("123123", this);
  for (let i = 0; i < this?.length; i++) {
    if (val == this[i]) {
      return true;
    }
  }
  return false;
};

// 2nd way
const findUniqueValues = (arr) => {
  let uniqueArray = [];

  for (let i = 0; i < arr?.length; i++) {
    if (!uniqueArray.customIncludes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};
const newArray = [4, 23, 3, 5, 6, 5, 4, 3, 2, 1, 9];

console.log(findUniqueValues(newArray));
