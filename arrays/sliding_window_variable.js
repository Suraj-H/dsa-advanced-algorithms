/**
 * Sliding Window Variable
 *
 * Find the length of the longest subarray, with the same value in each position.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 2, 3, 3]
 * Output: 2
 * Explanation: The subarray [3, 3] has the longest subarray with the same value in each position.
 */

// sliding window variable size: time: O(n)
function longestSubarrayWithSameValue(arr) {
  let maxLength = 0;
  let L = 0;

  for (let R in arr) {
    if (arr[L] !== arr[R]) L = R;

    maxLength = Math.max(maxLength, R - L + 1);
  }

  return maxLength;
}

console.log(
  "Longest Subarray With Same Value: ",
  longestSubarrayWithSameValue([7, 2, 2, 3, 3, 3, 2, 5])
); // 3

/**
 * Find the minimum length subarray, where the sum of the subarray is greater than or equal to a given target. Assume the array is non-negative.
 *
 * Example 1:
 * Input: nums = [2, 3, 1, 2, 4, 3], target = 7
 * Output: 2
 * Explanation: The subarray [4, 3] has the minimum length 2.
 */

// sliding window variable size: time: O(n)
function shortestSubarrayWithSumGreaterThanOrEqualToTarget(arr, target) {
  let length = Infinity;
  let L = 0,
    total = 0;

  for (let R in arr) {
    total += arr[R];

    while (total >= target) {
      length = Math.min(R - L + 1, length);
      total -= arr[L];
      L++;
    }
  }

  return length === Infinity ? 0 : length;
}

console.log(
  "Shortest Subarray With Sum Greater Than Or Equal To Target: ",
  shortestSubarrayWithSumGreaterThanOrEqualToTarget([2, 3, 1, 2, 4, 3], 7)
); // 2
