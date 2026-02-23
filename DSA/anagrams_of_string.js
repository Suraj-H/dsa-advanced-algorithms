s = "cbaebabacd";
p = "abc";

// output : [0, 6]

// n = length of s
// k = length of p
// Building counts → O(k)
// Sliding → O(n)
// Comparing 26 letters → O(26) = constant
// Complexity : Time O(n) & Space O(1) (since 26 letters fixed)
function anagramsOfString(s, p) {
  const result = [];

  if (p.length > s.length) return [];

  const pCount = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  // build frequency for p
  for (const char of p) {
    pCount[char.charCodeAt(0) - 97]++;
  }

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // add right character
    windowCount[s[right].charCodeAt(0) - 97]++;

    // maintain window size
    if (right - left + 1 > p.length) {
      windowCount[s[left].charCodeAt(0) - 97]--;
      left++;
    }

    // compare frequencies
    if (pCount.join("#") === windowCount.join("#")) {
      result.push(left);
    }
  }

  return result;
}

console.log("anagramsOfString ->", anagramsOfString(s, p));
