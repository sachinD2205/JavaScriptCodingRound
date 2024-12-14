const tempArray = [4321, 321, 34, 76, 45];

// 1st way
// const sortArray = (arr) => {
//   let test = arr?.sort((a, b) => a - b);
//   return test;
// };

// 2nd without using sort method
const sortArray = (arr) => {
  let count = 0;

  for (i = 0; i < arr?.length - 1; i++) {
    // last element already sorted
    for (let j = 0; j < arr?.length - 1; j++) {
      // avoid array out of index bound
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(sortArray(tempArray));
