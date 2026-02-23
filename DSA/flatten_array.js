let arr = [1, [2, 3], [4, [5, 6]]];

// output : [1, 2, 3, 4, 5, 6]

// Time O(n) & Space O(n) Complexity - Because every element is visited once.
function flattenArrayRecursion(arr) {
  let result = [];

  for (let num of arr) {
    if (Array.isArray(num)) {
      result = result.concat(flattenArrayRecursion(num));
    } else {
      result.push(num);
    }
  }

  return result;
}

console.log("flattenArrayRecursion ->", flattenArrayRecursion(arr));

// Time O(n^2) worst case scenerio & Space O(1) Complexity
function flattenArrayInPlaceSplice(arr) {
  let i = 0;

  while (i < arr.length) {
    // Worst case: [[[1]]]
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...arr[i]);
    } else {
      i++;
    }
  }

  return arr;
}

console.log("flattenArrayInPlaceSplice ->", flattenArrayInPlaceSplice(arr));
