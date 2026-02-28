nums = [11, 4, 9, 6, 15, 18];
// output: 10

// Sorting → O(n log n)
// Two pointer loop → O(n^2)
// Time -> O(n^2)
// Space -> O(1)
function validTriangleNumber(nums) {
  nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return count;
}

console.log("validTriangleNumber ->", validTriangleNumber(nums));
