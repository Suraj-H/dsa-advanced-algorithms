/**
 * Kadane's Algorithm is a dynamic programming algorithm that is used to find the maximum sum of a contiguous subarray in an array of integers.
 * The algorithm works by iterating through the array and keeping track of the maximum sum of the subarray ending at the current index.
 * The maximum sum of the subarray ending at the current index is the maximum of the current element and the maximum sum of the subarray ending at the previous index plus the current element.
 * The algorithm is O(n) time complexity and O(1) space complexity.
 */

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The contiguous subarray [4,-1,2,1] has the largest sum 6.

// Kadane's Algorithm: time: O(n)
function kadanesAlgorithm(arr) {
  let maxSum = arr[0];
  let currentSum = 0;

  for (let n of arr) {
    currentSum = Math.max(n, (currentSum += n));
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log("Kadane's Algorithm: ", kadanesAlgorithm([4, -1, 2, -7, 3, 4])); // 7

// Return the left and right index of the max subarray sum,
// assuming there's exactly one result (no ties).
// Sliding window variation of Kadane's Algorithm: time: O(n)
function slidingWindow(arr) {
  let maxSum = arr[0];
  let currentSum = 0;
  let maxL,
    maxR = 0;
  let L = 0;

  for (let R = 0; R < arr.length; R++) {
    if (currentSum < 0) {
      currentSum = 0;
      L = R;
    }

    currentSum += arr[R];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxL = L;
      maxR = R;
    }
  }

  return [maxL, maxR];
}

console.log("Sliding window: ", slidingWindow([4, -1, 2, -7, 3, 4])); // [4, 5]
