const nestedArray = [
  5,
  10,
  15,
  20,
  [],
  [2, 4, 6, 8, 10, [7, 14, 21, 28, [10, 20, 30, 50]]],
];

const FlattenArray = (currentArray, targetArray = []) => {
  for (let i = 0; i < currentArray?.length; i++) {
    const currentValue = currentArray[i];
    if (Array.isArray(currentValue) && currentValue?.length > 0) {
      FlattenArray(currentValue, targetArray);
    } else {
      if (!Array.isArray(currentValue)) {
        targetArray.push(currentValue);
      }
    }
  }
  return targetArray;
};

console.log("FlattenArray", FlattenArray(nestedArray));
