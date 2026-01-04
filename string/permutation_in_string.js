/**
 * Permutation in String
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * Both strings only contain lowercase letters.
 *
 * Example 1:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Constraints:
 * 1 <= s1.length, s2.length <= 1000
 * s1 and s2 consist of lowercase English letters.
 *
 * Time: O(n)
 * Space: O(1)
 * where n is the maximum of the lengths of the two strings.
 */

// permutation in string: time: O(n) & space: O(1)
function permutationInStringSlidingWindow(s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Count[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }

  let L = 0;
  for (let R = s1.length; R < s2.length; R++) {
    if (matches === 26) return true;

    let index = s2.charCodeAt(R) - "a".charCodeAt(0);
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) matches++;
    else if (s1Count[index] + 1 === s2Count[index]) matches--;

    index = s2.charCodeAt(L) - "a".charCodeAt(0);
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) matches++;
    else if (s1Count[index] - 1 === s2Count[index]) matches--;

    L++;
  }

  return matches === 26;
}

console.log(
  "Permutation in String: ",
  permutationInStringSlidingWindow("ab", "lecabee")
); // true
console.log(
  "Permutation in String: ",
  permutationInStringSlidingWindow("abc", "lecaabee")
); // false
