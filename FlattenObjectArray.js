const nestedArray = [
  5,
  10,
  15,
  20,
  [2, 4, 6, 8, 10, [7, 14, 21, 28, [10, 20, 30, 50]]],
];

const mergeArray = (currentArray, updatedArray = []) => {
  for (let i = 0; i < currentArray?.length; i++) {
    console.log("dsfdsfsd", Array.isArray(currentArray[i]));
    if (!Array.isArray(currentArray[i])) {
      updatedArray.push(currentArray[i]);
    } else {
      mergeArray(currentArray[i], updatedArray);
    }
  }
  return updatedArray;
};

console.log(mergeArray(nestedArray));
