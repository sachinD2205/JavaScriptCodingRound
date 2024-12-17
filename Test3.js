// We have person array with elements where all the information for individual person has been stored.
// Move all senior citizen person at the start of array and non senior citizen member should be after senior citizen.
// While moving the person in array the sequence should not be change. The person who has alligned first should be present first.

// Example of Array

const inputArr = [
  { firstName: "A", lastName: "X", age: 65 },
  { firstName: "A", lastName: "X", age: 45 },
  { firstName: "A", lastName: "X", age: 60 },
  { firstName: "A", lastName: "X", age: 55 },
  { firstName: "A", lastName: "X", age: 25 },
  { firstName: "A", lastName: "X", age: 15 },
  { firstName: "A", lastName: "X", age: 70 },
];

// O/P
// [
// 	{firstName"A",lastName"X",age:65},
// 	{firstName"A",lastName"X",age:60},
// 	{firstName"A",lastName"X",age:70},
// 	{firstName"A",lastName"X",age:45},
// 	{firstName"A",lastName"X",age:55},
// 	{firstName"A",lastName"X",age:25},
// 	{firstName"A",lastName"X",age:15}
// ]
// 58 -- above

const findCorrectOrder = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr?.length > 0; i++) {
    if (arr[i]?.age > 58) {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < arr?.length > 0; i++) {
    if (arr[i]?.age <= 58) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log("correctOrder", findCorrectOrder(inputArr));
