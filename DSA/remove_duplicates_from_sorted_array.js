nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Time → O(n)
// Space → O(1)
function sortedArrayRemoveDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

console.log(
  "sortedArrayRemoveDuplicates ->",
  sortedArrayRemoveDuplicates(nums),
);
