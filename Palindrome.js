// Palindrome Number -- Number is same if reverse

const isPalindromeNumber = (str) => {
  for (let i = 0; i < Math.floor(str?.length) / 2; i++) {
    if (str[i] !== str[str?.length - i - 1]) {
      return "notPailndrome";
    }
  }
  return "is Palindrome";
};

console.log(isPalindromeNumberx`("ABA"));
console.log(isPalindromeNumber("AAC"));
