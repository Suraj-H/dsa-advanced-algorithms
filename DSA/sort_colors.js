nums = [2, 1, 2, 0, 1, 0, 1, 0, 1];
// output : [0,0,0,1,1,1,1,2,2]

// Time → O(n)
// Space → O(1)
function sortColors(nums) {
  let index = 0;
  let left = 0;
  let right = nums.length - 1;

  // Termination
  while (index <= right) {
    // Sorting 0s
    if (nums[index] === 0) {
      [nums[index], nums[left]] = [nums[left], nums[index]];
      left++;
      index++;
    }
    // Sorting 2s
    else if (nums[index] === 2) {
      [nums[index], nums[right]] = [nums[right], nums[index]];
      right--;
    }
    // Sorting 1s
    else {
      index++;
    }
  }

  return nums;
}

console.log("sortColors ->", sortColors(nums));
