s = "tree";
k = 2;

// output : Top 2 → e and t or r

// Counting → O(n)
// Bucket traversal → O(n)
// Time: O(n)
// Space: O(n)
function topKFrequentElementsBucketSort(s, k) {
  const result = [];
  const count = {};

  const freq = new Array(s.length + 1).fill().map(() => []);

  // console.log(freq);

  for (const char of s) {
    count[char] = 1 + (count[char] || 0);
  }

  // console.log(count);

  for (const char in count) {
    freq[count[char]].push(char);
  }

  // console.log(freq);

  for (let i = freq.length - 1; i >= 0 && result.length < k; i--) {
    for (const char of freq[i]) {
      result.push(char);

      // console.log(result)

      if (result.length === k) break;
    }
  }

  return result;
}

console.log(
  "topKFrequentElementsBucketSort ->",
  topKFrequentElementsBucketSort(s, k),
);
