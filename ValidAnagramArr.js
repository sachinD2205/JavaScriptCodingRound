const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const output  = [["eat","tea","ate"],["tan","nat"],["bat"]]
// group of anagram

const findValidAnagram = (arr) => {
  let obj = {};

  for (let i = 0; i < arr?.length; i++) {
    const temp = arr[i]?.split("").sort().join("");
    if (obj[temp]) {
      console.log("dsss", Array.isArray(obj[temp]));
      obj[temp].push(arr[i]);
    } else {
      obj[temp] = [arr[i]];
    }
  }

  //   for (let key in obj) {
  //     tempArry.push(obj[key]);
  //   }
  //   console.log("obj3333333333", obj);
  console.log("33333333", Object.keys(obj));
  return Object.values(obj);
};

console.log("validAngramis", findValidAnagram(input));
