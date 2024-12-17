//  Create Array of Sum -
//  every index put sum but in sum not at that index number

const inputArray = [2, 7, 11, 4, -2];
const expectedOutputArray = [20, 15, 11, 18, 24];

const outputArray = [];

// 1 way 
// inputArray.map((data, index) => {
//   let temp = inputArray.reduce((acc, curr) => {
//     if (curr != inputArray[index]) {
//       acc = acc + curr;
//     }
//     return acc;
//   }, 0);

//   console.log("temp", temp);
//   outputArray.push(temp);
// });

// ! 2 way  ============ best way
inputArray.forEach((data, index) => {
  let temp = inputArray.reduce((acc, curr) => {
    if (curr != inputArray[index]) {
      acc = acc + curr;
    }
    return acc;
  }, 0);

//   console.log("temp", temp);
  outputArray.push(temp);
})


//! 3 way 
// for(let i=0; inputArray.length>i ;i++){
//   let temp = inputArray.reduce((acc, curr) => {
//     if (curr != inputArray[i]) {
//       acc = acc + curr;
//     }
//     return acc;
//   }, 0);

//   console.log("temp", temp);
//   outputArray.push(temp);
// }


//! 3 way 
// for(let i=0; inputArray.length>i ;i++){
//   let temp = inputArray.reduce((acc, curr) => {
//     if (curr != inputArray[i]) {
//       acc = acc + curr;
//     }
//     return acc;
//   }, 0);

//   console.log("temp", temp);
//   outputArray.push(temp);
// }






console.log("result", outputArray);
