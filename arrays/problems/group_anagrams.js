/**
 * Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Constraints:
 * 1 <= strs.length <= 1000
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 *
 * Time: O(n * m)
 * Space: O(n) / O(n * m)
 * where n is the number of strings in the array
 * and m is the length of the longest string in the array
 */

// group anagrams: time: O(n * m) & space: O(n) / O(n * m)
function groupAnagramsHashMap(strs) {
  const map = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join(",");
    if (map[key]) map[key].push(str);
    else map[key] = [str];
  }
  return Object.values(map);
}

console.log(
  "Group Anagrams: ",
  groupAnagramsHashMap(["act", "pots", "tops", "cat", "stop", "hat"])
);
