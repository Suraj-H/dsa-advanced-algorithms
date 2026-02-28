nums = [2, 0, 4, 0, 9];
// output: [2,4,9,0,0]

// Time -> O(n)
// Space -> O(1)
function moveZeroes(nums) {
  let nonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [[nums[nonZero]], nums[i]] = [[nums[i]], nums[nonZero]];
      nonZero++;
    }
  }

  return nums;
}

console.log("moveZeroes ->", moveZeroes(nums));
