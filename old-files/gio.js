/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let allVowels = [];

  let sToArr = s.split("");

  for (let i = 0; i < sToArr.length; i++) {
    const curr = sToArr[i];
    if (vowels.includes(curr)) {
      allVowels.unshift(curr);
    }
  }

  for (let i = 0; i < sToArr.length; i++) {
    if (vowels.includes(sToArr[i])) {
      sToArr[i] = allVowels[0];
      allVowels.shift();
    }
  }

  return sToArr.join("");
};

// Input: s = "hello"
// Output: "holle"

console.log(reverseVowels("leetcode"));
