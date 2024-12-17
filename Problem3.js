// find second largest number in array
// if 2 number are same then second last number is another

const input = [1, 2, -2, 11, 7, 1];
const output = 7;

const input2 = [1, 4, 7, 2, 4, 7];
const output2 = 4;

// const uniqueArray = [...new Set(array)];

// // 1st way
// const findSecondLargest = (input) => {
//   const uniqueArray = [...new Set(input)];
//   const sortedArray = uniqueArray.sort((a, b) => a - b);
//   return sortedArray[sortedArray.length - 2];
// };

// console.log(findSecondLargest(input));
// console.log(findSecondLargest(input2));

//! ===================================>

//2nd way   ========== without using Set Method
// const findSecondLargest = (input) => {
//   const uniqueArray = [];

//   for (let i = 0; input.length>i; i++) {
//     if (!uniqueArray.includes(input[i])) {
//          uniqueArray.push(input[i]);
//     }
//   }
//   const sortedArray = uniqueArray.sort((a, b) => a - b);
//   return sortedArray[sortedArray.length - 2];
// };

// console.log(findSecondLargest(input));
// console.log(findSecondLargest(input2));

//! =========================================>

//! without using 3 includes and without using sort method

const findSecondLargest = (input) => {
  console.log("inputArray", input);

  const uniqueArray = removeDuplicates(input);

  console.log("uniqueArray", uniqueArray);

  const sortedArray = sortArray(uniqueArray);

  console.log("sortedArray", sortedArray);

  const secondLastElementOfArray = getSecondLastElementOfArray(sortedArray);


  return secondLastElementOfArray;
};

// removeDuplicates
const removeDuplicates = (props) => {
  const input = props;

  const uniqueArray = [];
  // removed duplicate of array
  for (let i = 0; input.length > i; i++) {
    if (uniqueArray.length > 0) {
      let tempData = null;
      for (let j = 0; uniqueArray.length > j; j++) {
        if (input[i] == uniqueArray[j]) {
          tempData = input[i];
        }
      }
      if (tempData == null || tempData == undefined) {
        uniqueArray.push(input[i]);
      }
    } else {
      uniqueArray.push(input[i]);
    }
  }

  return uniqueArray;
};

// sort Array
const sortArray = (props) => {
  let uniqueArray = props;

  // sorted Array
  for (let i = 0; uniqueArray.length > i; i++) {
    for (let j = 0; uniqueArray.length - 1 > j; j++) {
      if (uniqueArray[j] > uniqueArray[j + 1]) {
        let temp = uniqueArray[j];
        uniqueArray[j] = uniqueArray[j + 1];
        uniqueArray[j + 1] = temp;
      }
    }
  }

  return uniqueArray;
};

// getSecondLastElementOfArray
const getSecondLastElementOfArray = (props) => {
  const inputArray = props;

  return inputArray[inputArray.length - 2];
};

console.log("secondLargestElementOfArray",findSecondLargest(input));
console.log("secondLargestElementOfArray",findSecondLargest(input2));
