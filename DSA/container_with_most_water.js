height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// Time: O(n)
// Space: O(1)
function containerWithMostWater(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[right], height[left]);
    const area = width * h;

    max = Math.max(max, area);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}

console.log("containerWithMostWater ->", containerWithMostWater(height));
