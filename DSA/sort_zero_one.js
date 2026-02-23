nums = [1, 0, 1, 0, 1, 0];

// output : [0,0,0,1,1,1]

// Time → O(n)
// Space → O(1)
function sortZeroOne(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] === 0) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }

  return nums;
}

console.log("sortZeroOne ->", sortZeroOne(nums));
