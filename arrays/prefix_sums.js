/**
 * Prefix Sums
 *
 * Given an array of values, design a data structure that can query the sum of a subarray in constant time.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 4, 5], left = 1, right = 3
 * Output: 9
 * Explanation: The sum of the values in the range [2, 4] is 9.
 */

// prefix sums: time: O(1)
class PrefixSum {
  constructor(arr) {
    this.prefixSum = [];
    for (let i = 0; i < arr.length; i++) {
      this.prefixSum[i] = (this.prefixSum[i - 1] || 0) + arr[i];
    }
  }

  query(left, right) {
    return this.prefixSum[right] - (this.prefixSum[left - 1] || 0);
  }
}

const prefixSum = new PrefixSum([1, 2, 3, 4, 5]);
console.log("Prefix Sum: ", prefixSum.query(0, 3)); // 9
