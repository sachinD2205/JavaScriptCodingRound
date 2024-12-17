//! Write a function to reverse a string.

const studentName = "sachin";

//! 1st way
// console.log(studentName.split("").reverse().join(""));

//! 2nd way
const reverseString = (str) => {
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(tempStr);
    tempStr += str[i];
  }
  return tempStr;
};

console.log(reverseString(studentName));
