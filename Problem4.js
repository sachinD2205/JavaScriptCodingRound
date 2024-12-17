//  roate the array by two places
// in forward

let input = [2, 7, 11, 4, -2];
let expectedOutput = [11, 4, -2, 2, 7];

const roatateTheyArrayBy2 = (input) => {
  let uniqueArray = [];

  // outerLoop
  for (let i = 0; input.length> i; i++) {
    console.log('423432',input,input.length,input[i]);
    uniqueArray[i+2] = input[i];
    console.log("unique",uniqueArray);
  }

  return uniqueArray;
};

console.log(
  "ExpectedOutput",
  expectedOutput,
  "Result",
  roatateTheyArrayBy2(input)
);
