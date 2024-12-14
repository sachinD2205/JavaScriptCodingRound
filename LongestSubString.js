const input = "aabcabcbb";

// find longest substring length

const findLongestSubString = (inputString) => {
  let str = "";

  for (let i = 0; i < inputString?.length; i++) {
    if (!str.split("").includes(inputString[i])) {
      str += inputString[i];
    } else {
      return str.length;
    }
  }
  console.log("str", str);
};

console.log("longestSubString", findLongestSubString(input));
