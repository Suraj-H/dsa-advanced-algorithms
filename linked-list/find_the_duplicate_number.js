/**
 * Find the Duplicate Number
 *
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 *
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 * Constraints:
 * 1 <= n <= 10^5
 *
 * Time: O(n)
 * Space: O(1)
 * where n is the length of the array
 */

// find the duplicate number: time: O(n) & space: O(1)
function findDuplicateNumberFloydsCycleDetection(nums) {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}


console.log("Find the duplicate number: ", findDuplicateNumberFloydsCycleDetection([1,3,4,3,2])); // 3
