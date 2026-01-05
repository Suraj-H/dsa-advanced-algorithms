/**
 * Top K Frequent Elements
 *
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * The test cases are generated such that the answer is always unique.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Constraints:
 * 1 <= nums.length <= 100000
 * -1000 <= nums[i] <= 1000
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the length of the array
 */

// top k frequent elements: time: O(n) & space: O(n)
function topKFrequentElementsBucketSort(nums, k) {
  const count = {};
  const frequency = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const c in count) {
    frequency[count[c]].push(Number(c));
  }

  const result = [];
  for (let i = frequency.length - 1; i > 0; i--) {
    for (const num of frequency[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }

  return result;
}

console.log(
  "Top K Frequent Elements: ",
  topKFrequentElementsBucketSort([1, 2, 2, 3, 3, 3], 2)
); // [3,2]
