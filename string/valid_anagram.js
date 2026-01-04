/**
 * Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Constraints:
 * s and t consist of lowercase English letters.
 *
 * Time: O(n + m)
 * Space: O(1)
 * where n is the length of the string s
 * and m is the length of the string t
 */

// valid anagram: time: O(n + m) & space: O(1)
function isValidAnagramHashMap(s, t) {
  if (s.length !== t.length) return false;

  const sCount = {};
  const tCount = {};

  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = (sCount[s[i]] || 0) + 1;
    tCount[t[i]] = (tCount[t[i]] || 0) + 1;
  }

  for (const key in sCount) {
    if (tCount[key] !== sCount[key]) return false;
  }

  return true;
}

console.log("Valid Anagram: ", isValidAnagramHashMap("anagram", "nagaram")); // true
console.log("Valid Anagram: ", isValidAnagramHashMap("rat", "car")); // false
