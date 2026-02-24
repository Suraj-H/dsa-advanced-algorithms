nums = [1, 4, 8, 3, 6, 3];

function bubbleSort(nums) {
  let n = nums.length;

  for (let i = 0; i < nums; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}

console.log("bubbleSort ->", bubbleSort(nums));
