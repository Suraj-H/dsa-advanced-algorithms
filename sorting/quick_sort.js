/**
 * Quick Sort
 *
 * Quick sort is a divide and conquer algorithm that sorts an array by partitioning it into two halves, sorting each half, and then merging the two halves back together.
 * The algorithm is O(n log n) time complexity and O(n) space complexity.
 *
 * Example 1:
 * Input: arr = [5, 3, 4, 1, 2]
 * Output: [1, 2, 3, 4, 5]
 * Explanation: The array is sorted in ascending order.
 *
 * Example 2:
 * Input: arr = [5, 4, 3, 2, 1]
 * Output: [1, 2, 3, 4, 5]
 *
 * Time: O(n log n)
 * Space: O(n)
 * where n is the length of the array
 */

// quick sort: time: O(n log n) & space: O(n)
function quickSort(arr, start, end) {
  if (end - start + 1 <= 1) return arr;

  let pivot = arr[end];
  let leftPointer = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      const temp = arr[leftPointer];
      arr[leftPointer] = arr[i];
      arr[i] = temp;
      leftPointer++;
    }
  }

  arr[end] = arr[leftPointer];
  arr[leftPointer] = pivot;

  quickSort(arr, start, leftPointer - 1);
  quickSort(arr, leftPointer + 1, end);

  return arr;
}


console.log("Quick sort: ", quickSort([5, 3, 4, 1, 2], 0, 4)); // [1, 2, 3, 4, 5]
