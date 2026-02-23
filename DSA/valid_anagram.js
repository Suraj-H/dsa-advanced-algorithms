s = "anagram";
t = "nagaram";

// output : true

// n = string length
// Time: O(n)
// Space: O(1) (26 letters fixed)
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    count[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (const item of count) {
    if (item !== 0) return false;
  }

  return true;
}

console.log("validAnagram ->", validAnagram(s, t));

// n = string length
// Time: O(n)
// Space: O(1) (26 letters fixed)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (const char of s) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const char of t) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    count[index]--;

    if (count[index] < 0) return false;
  }

  return true;
}

console.log("isAnagram ->", isAnagram(s, t));
