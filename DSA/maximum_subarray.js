nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Time → O(n)
// Space → O(1)
function maximumSubarray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log("maximumSubarray ->", maximumSubarray(nums));
