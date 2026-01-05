/**
 * Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 *
 * Constraints:
 * 0 <= nums.length <= 100000
 * -10^9 <= nums[i] <= 10^9
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the length of the array
 */

// longest consecutive sequence: time: O(n) & space: O(n)
function longestConsecutiveSequenceHashSet(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 0;
      while (numSet.has(num + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log("Longest Consecutive Sequence: ", longestConsecutiveSequenceHashSet([0,3,2,5,4,6,1,1])); // 7
