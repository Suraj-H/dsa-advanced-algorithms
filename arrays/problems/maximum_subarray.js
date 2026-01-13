/**
 * Maximum Subarray
 *
 * Given an array of integers nums, find the subarray with the largest sum and return the sum.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The contiguous subarray [4,-1,2,1] has the largest sum 6.
 *
 *
 * Constraints:
 * 1 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 *
 * Time: O(n)
 * Space: O(1)
 * where n is the length of the array
 */

// maximum subarray: time: O(n) & space: O(1)
function maximumSubarrayKadanesAlgorithm(arr) {
  let maxSum = arr[0];
  let currentSum = 0;

  for (let n of arr) {
    currentSum = Math.max(n, (currentSum += n));
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(
  "Maximum Subarray: ",
  maximumSubarrayKadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
); // 6
