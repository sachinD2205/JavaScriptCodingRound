const num = [12, 3, 5, 787, 3332, 3332, 2, 14, 2, 2, 25, 3];

const ThirdLargestNumber = (arr) => {
  let a = -1;
  let b = -1;
  let c = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
      c = b;
      b = a;
      a = arr[i];
      console.log("firstIf", a, b, c, arr[i]);
    } else if (arr[i] > b && arr[i] !== a) {
      c = b;
      b = arr[i];
    } else if (arr[i] > c && arr[i] !== b && arr[i] !== a) {
      c = arr[i];
    }
  }
  if (c === -1) {
    return "Not enough unique numbers to determine the third largest";
  } else {
    return `third largest number is ${c}`;
  }
};

console.log(ThirdLargestNumber(num));
