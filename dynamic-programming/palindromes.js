/**
 * Palindromes
 *
 * A palindrome is a string that reads the same forward and backward.
 * Example:
 * "racecar" is a palindrome
 * "hello" is not a palindrome
 *
 * Time: O(n ^ 2)
 * Space: O(n)
 * where n is the length of the string
 */

// palindromes: time: O(n ^ 2) & space: O(n)
function palindromesDynamicProgramming(s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      length = Math.max(length, right - left + 1);
      left--;
      right++;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      length = Math.max(length, right - left + 1);
      left--;
      right++;
    }
  }

  return length;
}

console.log("Palindromes dynamic programming: ", palindromesDynamicProgramming("abaabc")); // 5
