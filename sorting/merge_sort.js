/**
 * Merge Sort
 *
 * Merge sort is a divide and conquer algorithm that sorts an array by dividing it into two halves, sorting each half, and then merging the two halves back together.
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
 * Explanation: The array is sorted in descending order.
 *
 * Time: O(n log n)
 * Space: O(n)
 * where n is the length of the array
 */

// merge sort: time: O(n log n) & space: O(n)
function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
  return arr;
}

function merge(arr, left, mid, right) {
  let length1 = mid - left + 1;
  let length2 = right - mid;

  let leftArr = new Array(length1);
  let rightArr = new Array(length2);

  for (let i = 0; i < length1; i++) {
    leftArr[i] = arr[left + i];
  }

  for (let i = 0; i < length2; i++) {
    rightArr[i] = arr[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = left;

  // merge the two arrays into the original array
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  // if there are remaining elements in the left array, add them to the merged array
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  // if there are remaining elements in the right array, add them to the merged array
  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
  return arr;
}


console.log("Merge sort: ", mergeSort([5, 3, 4, 1, 2], 0, 4)); // [1, 2, 3, 4, 5]
