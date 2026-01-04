/**
 * 3Sum
 *
 * Given an array of integers nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: The triplets that sum to 0 are [-1,-1,2] and [-1,0,1].
 *
 * Constraints:
 * 3 <= nums.length <= 3000
 * -1000 <= nums[i] <= 1000
 * Only one valid answer exists.
 */

// 3sum: time: O(n^2)
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum < 0) L++;
      else if (sum > 0) R--;
      else {
        result.push([nums[i], nums[L], nums[R]]);
        L++;
        R--;
        while (L < R && nums[L] === nums[L - 1]) L++;
      }
    }
  }
  return result;
}

console.log("3Sum: ", threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]
)); // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
