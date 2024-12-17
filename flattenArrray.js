const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8], [9, [10]]];

Array.prototype.flattenArray = function () {
  const tempArray = [];

  const traverseArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverseArray(arr[i]);
      } else {
        tempArray.push(arr[i]);
      }
    }
  };

  traverseArray(this);

  return tempArray;
};

console.log(nestedArray.flattenArray());
