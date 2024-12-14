//1st way
// const FindSecondLargestElementOfArray = (arr) => {
//   const withoutDuplicateArray = [...new Set(arr)];
//   const sortedArray = withoutDuplicateArray?.sort((a, b) => a - b);

//   return sortedArray[sortedArray?.length - 2];
// };
//2nd way
const FindSecondLargestElementOfArray = (arr) => {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] > first) {
      let temp = first;
      first = arr[i];
      second = temp;
    } else if (arr[i] !== first && arr[i] > second) {
      second = arr[i];
    }
  }
  return second == -Infinity ? null : second;
};

const tempArr = [4, 23, 3, 23, 5, 5, 6, 3, 6, 4, 2, 1];

console.log(FindSecondLargestElementOfArray(tempArr));
