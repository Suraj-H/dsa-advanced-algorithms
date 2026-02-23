nums = [-4, -1, -1, 0, 1, 2];

// output : -1 + 0 + 1 = 0 ✅ & -1 + -1 + 2 = 0 ✅

// Sorting: O(nlogn)
// Outer loop: O(n)
// Inner two-pointer: O(n)
// Time: O(n^2)
// Space: O(1) - excluding output
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate fixed number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log("threeSum ->", threeSum(nums));
