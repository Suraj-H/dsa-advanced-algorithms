nums = [1, 3, 0, 1, 4];
// output: true

// Time -> O(n)
// Space -> O(1)
function jumpGame(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

console.log("jumpGame ->", jumpGame(nums));
