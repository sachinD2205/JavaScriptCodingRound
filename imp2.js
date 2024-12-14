a = [10, 20, 50, 25, 40, 35, 30, 60, 100];

// Second Max Element : 50

const findSecondLargestElement = (arr) => {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] > first && arr[i] !== first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== second && arr[i] !== first) {
      second = arr[i];
    }
  }

  if (second > 0) {
    return second;
  } else {
    return "not valid ";
  }
};

console.log("SecondLargestElement", findSecondLargestElement(a));
