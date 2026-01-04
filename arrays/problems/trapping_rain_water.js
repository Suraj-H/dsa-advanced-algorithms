/**
 * Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Constraints:
 * n == height.length
 * 1 <= n <= 2 * 104
 * 0 <= height[i] <= 105
 */

// trapping rain water: time: O(n) & space: O(1)
function trappingRainWaterTwoPointers(height) {
  let trappedWater = 0;
  let L = 0;
  let R = height.length - 1;
  let leftMax = height[L];
  let rightMax = height[R];

  while (L < R) {
    if (height[L] < height[R]) {
      L++;
      leftMax = Math.max(leftMax, height[L]);
      trappedWater += leftMax - height[L];
    } else {
      R--;
      rightMax = Math.max(rightMax, height[R]);
      trappedWater += rightMax - height[R];
    }
  }

  return trappedWater;
}

console.log("Trapping Rain Water: ", trappingRainWaterTwoPointers([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
