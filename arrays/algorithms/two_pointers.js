/**
 * Two Pointers
 *
 * Given a string, return true if it is a palindrome.
 * Example 1:
 * Input: s = "racecar"
 * Output: true
 * Explanation: The string "racecar" is a palindrome.
 */

// two pointers: time: O(n)
class IsPalindrome {
  constructor(word) {
    this.word = word;
  }

  isPalindrome() {
    let L = 0;
    let R = this.word.length - 1;

    while (L < R) {
      while (L < R && !this.isAlphanumeric(this.word[L])) L++;

      while (R > L && !this.isAlphanumeric(this.word[R])) R--;

      if (this.word[L].toLowerCase() !== this.word[R].toLowerCase())
        return false;
      L++;
      R--;
    }

    return true;
  }

  isAlphanumeric(char) {
    return /^[a-zA-Z0-9]+$/.test(char);
  }
}

const isPalindrome = new IsPalindrome("Was it a car or a cat I saw?");
console.log("Is Palindrome: ", isPalindrome.isPalindrome()); // true

/**
 * Given a sorted array of integers, return the indices of the two elements (in different positions) that add up to a given target. Assume there is exactly one solution.
 * Example 1:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: The elements at indices 0 and 1 add up to 9.
 */

// two pointers: time: O(n)
function twoSum(arr, target) {
  let L = 0;
  let R = arr.length - 1;

  while (L < R) {
    if (arr[L] + arr[R] < target) L++;
    else if (arr[L] + arr[R] > target) R--;
    else return [L, R];
  }
  return [];
}

console.log("Two Sum: ", twoSum([2, 7, 11, 15], 9)); // [0, 1]
