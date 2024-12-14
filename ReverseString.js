// 1st way
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// second way without using reverse method
// const reverseString = (str) => {
//   let str1 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     str1 = str1 + str[i];
//   }
//   return str1;
// };
const tempString = "Hello";
console.log(reverseString(tempString));
