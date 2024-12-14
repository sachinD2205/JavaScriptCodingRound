// 1st way
// const countRepetation = (arr) => {
//   let countObj = {};

//   for (let i = 0; i < arr.length; i++) {
//     console.log("countOb", countObj[arr[i]]);
//     if (!countObj[arr[i]]) {
//       countObj = {
//         ...countObj,
//         [arr[i]]: 1,
//       };
//     } else {
//       countObj = {
//         ...countObj,
//         [arr[i]]: countObj[arr[i]] + 1,
//       };
//     }
//   }

//   return countObj;
// };

//2nd way - using reducer method
const countRepetation = (arr) => {
  let countObj = arr?.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  return countObj;
};

const newArray = [23, 3, 5, 5, 6, 7, 3, 2, 1, 8, 7];
const stringArr = "sachinsane";

console.log(countRepetation(newArray));
