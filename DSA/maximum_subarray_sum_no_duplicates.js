// Maximum Sum of Subarrays of Size K

nums = [2, 1, 5, 1, 3, 2];
k = 3;

// Time → O(n)
// Space → O(k)
function maxSumNoDuplicates(nums, k) {
  let maxSum = -Infinity;
  let windowSum = 0;
  let start = 0;
  let set = new Set();

  for (let end = 0; end < nums.length - 1; end++) {
    // Remove duplicates
    while (set.has(nums[end])) {
      set.delete(nums[start]);
      windowSum -= nums[start];
      start++;
    }

    // Add current element
    set.add(nums[end]);
    windowSum += nums[end];

    // If window size exceeds k
    if (end - start + 1 > k) {
      set.delete(nums[start]);
      windowSum -= nums[start];
      start++;
    }

    // If window size exactly k
    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
    }
  }

  return maxSum;
}

console.log("maxSumNoDuplicates ->", maxSumNoDuplicates(nums, k));
