nums = [100, 4, 200, 1, 3, 2];

// Time → O(n)
// Space → O(n)
function longestConsecutiveSequence(nums) {
  let longest = 0;
  const set = new Set(nums);

  for (let num of nums) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}

console.log("longestConsecutiveSequence ->", longestConsecutiveSequence(nums));
