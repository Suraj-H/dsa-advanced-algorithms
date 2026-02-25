// Maximum Sum of Subarrays of Size K

nums = [2, 1, 5, 1, 3, 2];
k = 3;

// Time → O(n)
// Space → O(1)
function maximumSubarraySum(nums, k) {
  let maxSum = -Infinity;
  let start = 0;
  let windowSum = 0;

  for (let end = 0; end < nums.length - 1; end++) {
    windowSum += nums[end];

    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[start];
      start++;
    }
  }

  return maxSum;
}

console.log("maximumSubarraySum ->", maximumSubarraySum(nums, k));
