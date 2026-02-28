nums = [3, 2, 2, 3, 4, 6, 7, 7, -1];
k = 4;

// subarrays of length k
// Time → O(n)
// Space → O(k)
function maxSumOfDistinctSubarrays(nums, k) {
  let start = 0;
  let maxSum = -Infinity;
  let currentSum = 0;
  let state = {};

  for (let end = 0; end < nums.length; end++) {
    currentSum += nums[end];
    state[nums[end]] = (state[nums[end]] || 0) + 1;

    if (end - start + 1 === k) {
      if (Object.keys(state).length === k) {
        maxSum = Math.max(maxSum, currentSum);
      }

      currentSum -= nums[start];
      state[nums[start]]--;
      if (state[nums[start]] === 0) {
        delete state[nums[start]];
      }

      start++;
    }
  }

  return maxSum === -Infinity ? 0 : maxSum;
}

console.log("maxSumOfDistinctSubarrays ->", maxSumOfDistinctSubarrays(nums, k));
