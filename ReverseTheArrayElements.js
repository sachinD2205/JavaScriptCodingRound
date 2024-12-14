// 1st way
// const RevereseTheArrayElements = (arr) => {
//   return arr.reverse();
// };

// 2nd way
const RevereseTheArrayElements = (arr) => {
  let tempArray = [];
  for (let i = arr?.length - 1; i >= 0; i--) {
    tempArray.push(arr[i]);
  }

  return tempArray;
};
const newArr = [4, 23, 3, 5, 5, 6, 4, 3, 2, 1];

console.log(RevereseTheArrayElements(newArr));
