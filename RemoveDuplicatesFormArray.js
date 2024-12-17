const num = [12, 3, 5, 787, 3332, 3332, 2, 14, 2, 2, 25, 3];

// remove duplicates
Array.prototype.isIncludes = function (element) {
  for (let i = 0; i < this?.length; i++) {
    if (element === this[i]) {
      return true;
    }
  }
  return false;
};

const removeDuplicates = (arr) => {
  let tempArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!tempArray.isIncludes(arr[i])) {
      tempArray.push(arr[i]);
    }
  }
  return tempArray;
};

console.log(removeDuplicates(num));
