heights = [4, 2, 3, 2, 1];
// output : [0,2,3,4]

// Time -> O(n)
// Space -> O(n)
function buildingsWithAnOceanView(heights) {
  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] <= heights[i]) {
      stack.pop();
    }

    stack.push(i);
  }

  return stack;
}

console.log("buildingsWithAnOceanView ->", buildingsWithAnOceanView(heights));
