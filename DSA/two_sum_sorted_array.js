nums = [1, 2, 3, 4, 6, 8, 11];
target = 10;

// n = array length
// Time: O(n)
// Space: O(1) - because no extra space
function twoSumSortedArrayTwoPointers(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

console.log(
  "twoSumSortedArrayTwoPointers ->",
  twoSumSortedArrayTwoPointers(nums, target),
);
