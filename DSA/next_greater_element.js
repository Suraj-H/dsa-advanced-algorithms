nums = [2, 1, 3, 2, 4, 3];
// output : [ 3, 3, 4, 4, -1, -1 ]

// Each element: Pushed once & Popped once
// Total = 2n operations
// Time → O(n)
// Space → O(n)
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }

    stack.push(i);
  }

  return result;
}

console.log("nextGreaterElement ->", nextGreaterElement(nums));
