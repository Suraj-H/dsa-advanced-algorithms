/**
 * Products of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Constraints:
 * 2 <= nums.length <= 1000
 * -20 <= nums[i] <= 20
 *
 * Time: O(n) & Space: O(n)
 * where n is the length of the array
 */

// products of array except self: time: O(n) & space: O(n)
function productsOfArrayExceptSelfPrefixAndSuffix(nums) {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}

console.log("Products of Array Except Self: ", productsOfArrayExceptSelfPrefixAndSuffix([1,2,4,6])); // [24,12,8,6]
