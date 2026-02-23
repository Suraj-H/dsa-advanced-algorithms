nums = [2, 7, 11, 15];
target = 9;

// output : [0, 1]

// n = array length
// Time: O(n)
// Space: O(n)
function twoSumHashmap(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map[needed] !== undefined) {
      return [map[needed], i];
    } else {
      map[nums[i]] = i;
    }
  }
}

console.log("twoSumHashmap ->", twoSumHashmap(nums, target));
