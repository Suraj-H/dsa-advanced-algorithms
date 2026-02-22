let arr = [1, [2, 3], [4, [5, 6]]];

// output : [1, 2, 3, 4, 5, 6]

// Time O(n) & Space O(n) Complexity - Because every element is visited once.

function flattenArray(arr) {
  let result = [];

  for (let num of arr) {
    if (Array.isArray(num)) {
      result = result.concat(flattenArray(num));
    } else {
      result.push(num);
    }
  }

  return result;
}

console.log("flattenArray ->", flattenArray(arr));
