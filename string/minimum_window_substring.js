/**
 * Minimum Window Substring
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * 1 <= t.length <= 1000
 * s and t consist of uppercase and lowercase English letters.
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the length of the string s
 * and m is the length of the string t
 */

// minimum window substring: time: O(n) & space: O(n)
function minimumWindowSubstringSlidingWindow(s, t) {
  if (t.length == "") return "";

  const tCount = {};
  for (let i = 0; i < t.length; i++) {
    tCount[t[i]] = (tCount[t[i]] || 0) + 1;
  }

  const windowCount = {};
  let have = 0;
  let need = Object.keys(tCount).length;
  let L = 0;
  let resultLength = Infinity;
  let result = [-1, -1];

  for (let R = 0; R < s.length; R++) {
    const rightChar = s[R];
    windowCount[rightChar] = (windowCount[rightChar] || 0) + 1;
    if (tCount[rightChar] && windowCount[rightChar] === tCount[rightChar])
      have++;

    while (have === need) {
      if (R - L + 1 < resultLength) {
        resultLength = R - L + 1;
        result = [L, R];
      }

      const leftChar = s[L];
      windowCount[leftChar]--;
      if (tCount[leftChar] && windowCount[leftChar] < tCount[leftChar]) have--;
      L++;
    }
  }

  return resultLength === Infinity ? "" : s.slice(result[0], result[1] + 1);
}

console.log(
  "Minimum Window Substring: ",
  minimumWindowSubstringSlidingWindow("ADOBECODEBANC", "ABC")
); // "BANC"
