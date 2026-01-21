/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * However, insertion sort provides advantages such as:
 * - Simple implementation
 * - Efficient for (small) partially sorted data
 * - Stable (does not change the relative order of elements with equal keys)
 * - In-place (only requires a constant amount of additional memory space)
 * - Online (can sort a list as it receives it)
 *
 * Time: O(n^2)
 * Space: O(1)
 * where n is the length of the array
 *
 * Example 1 (best case):
 * Input: arr = [1, 2, 3, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 * Explanation: The array is already sorted in ascending order.
 *
 * Example 2 (worst case):
 * Input: arr = [5, 4, 3, 2, 1]
 * Output: [1, 2, 3, 4, 5]
 * Explanation: The array is sorted in descending order.
 */




// insertion sort: time: O(n^2) & space: O(1)
function insertionSort(arr) {
  for (let currentIndex = 1; currentIndex < arr.length; currentIndex++) {
    let previousIndex = currentIndex - 1;
    while (previousIndex >= 0 && arr[previousIndex] > arr[previousIndex + 1]) {
      const temp = arr[previousIndex + 1];
      arr[previousIndex + 1] = arr[previousIndex];
      arr[previousIndex] = temp;
      previousIndex--;
    }
  }
  return arr;
}

console.log("Insertion sort (best case): ", insertionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log("Insertion sort (worst case): ", insertionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
