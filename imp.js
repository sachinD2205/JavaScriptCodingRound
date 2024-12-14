a = [10, 20, 25, 30, 30, 20, 40, 25, 10];

//  1   2    3   4   5   6   7  8   9

// Find out the No. Of Pairs whose Sum is 50 and number should be at the Even Position

// O/P :

// 20,30

// 30,20

const findPairs = (arr) => {
  const pair = [];
  for (let i = 0; i < arr?.length && arr?.length; i++) {
    for (let j = i; j < arr?.length; j++) {
      if (arr[i] + arr[j] == 50 && i !== j) {
        if ((i + 1) % 2 == 0 && (j + 1) % 2 == 0) {
          console.log("validPair", arr[i], arr[j]);
        }
      }
    }
  }
  return pair;
};

console.log("output__", findPairs(a));
