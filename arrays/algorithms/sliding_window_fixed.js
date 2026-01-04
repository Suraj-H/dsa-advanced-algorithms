/**
 * Sliding Window Fixed
 *
 * Given an array, return true if there are two elements within a window of size k that are equal.
 * Example 1:
 * Input: nums = [1, 2, 3, 2, 3, 3], k = 2
 * Output: true
 * Explanation: The subarray [3, 3] has two elements that are equal.
 */

// sliding window fixed size: time: O(n)
function slidingWindowFixed(arr, k) {
  const window = new Set();
  let L = 0;

  for (let R in arr) {
    if (R - L + 1 > k) {
      window.delete(arr[L]);
      L++;
    }

    if (window.has(arr[R])) return true;

    window.add(arr[R]);
  }

  return false;
}

console.log(
  "Sliding Window Fixed: ",
  slidingWindowFixed([1, 2, 3, 2, 3, 3], 2)
); // true
