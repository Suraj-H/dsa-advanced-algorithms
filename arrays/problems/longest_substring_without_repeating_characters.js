/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The longest substring without repeating characters is "abc".
 *
 * Constraints:
 * 0 <= s.length <= 1000
 * s may consist of printable ASCII characters.
 *
 * Time: O(n)
 * Space: O(m)
 * where n is the length of the string and m is the number of unique characters in the string
 */

// longest substring without repeating characters: time: O(n)
function longestSubstringWithoutRepeatingCharactersSlidingWindow(s) {
  let maxLength = 0;
  let L = 0;
  let R = 0;
  const window = new Set();

  while (R < s.length) {
    while (window.has(s[R])) {
      window.delete(s[L]);
      L++;
    }
    window.add(s[R]);
    maxLength = Math.max(maxLength, R - L + 1);
    R++;
  }

  return maxLength;
}

console.log("Longest Substring Without Repeating Characters: ", longestSubstringWithoutRepeatingCharactersSlidingWindow("pwwkew")); // 3
