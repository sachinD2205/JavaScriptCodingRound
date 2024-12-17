const num = [12, 3, 5, 787, 3332, 3332, 2, 14, 2, 2, 25, 3];

const sumOfArray = (arr) => {
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
  }
  return tempSum;
};

console.log(sumOfArray(num));
