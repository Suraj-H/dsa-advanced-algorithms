/**
 * Bucket Sort
 *
 * Bucket sort is a sorting algorithm that works by dividing the input into a number of buckets, sorting each bucket, and then concatenating the buckets back together.
 * The algorithm is O(n) time complexity and O(n) space complexity.
 *
 * Example 1:
 * Input: arr = [5, 3, 4, 1, 2]
 * Output: [1, 2, 3, 4, 5]
 * Explanation: The array is sorted in ascending order.
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the length of the array
 */

// bucket sort: time: O(n) & space: O(n)
function bucketSort(arr) {
  const bucket = Array.from({ length: arr.length }, () => []);

  for (let i = 0; i < arr.length; i++) {
    bucket[arr[i]] = (bucket[arr[i]] || 0) + 1;
  }

  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    for (let j = 0; j < bucket[i]; j++) {
      arr[index] = i;
      index++;
    }
  }
  return arr;
}

console.log("Bucket sort: ", bucketSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
