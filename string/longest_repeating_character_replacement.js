/**
 * Longest Repeating Character Replacement
 *
 * You are given a string s consisting of only uppercase english characters and an integer k.
 * You can choose up to k characters of the string and replace them with any other uppercase English character.
 * After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

 * A substring is a contiguous sequence of characters within a string.
 *
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.

 * Example 2:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'B' with 'A' to get the longest substring containing only one distinct character.

 * Constraints:
 * 1 <= s.length <= 1000
 * 0 <= k <= s.length
 * s consists of only uppercase English letters.
 *
 * Time: O(n)
 * Space: O(m)
 * where n is the length of the string
 * and m is the number of unique characters in the string
 */

// longest repeating character replacement: time: O(n) & space: O(m)
function longestRepeatingCharacterReplacementSlidingWindow(s, k) {
  let maxLength = 0;
  let mostFrequent = 0;
  let L = 0;
  const frequency = new Map();

  for (let R = 0; R < s.length; R++) {
    frequency.set(s[R], (frequency.get(s[R]) || 0) + 1);
    mostFrequent = Math.max(mostFrequent, frequency.get(s[R]));

    while (R - L + 1 - mostFrequent > k) {
      frequency.set(s[L], frequency.get(s[L]) - 1);
      L++;
    }

    maxLength = Math.max(maxLength, R - L + 1);
  }

  return maxLength;
}

console.log(
  "Longest Repeating Character Replacement: ",
  longestRepeatingCharacterReplacementSlidingWindow("AAABABB", 1)
); // 5
