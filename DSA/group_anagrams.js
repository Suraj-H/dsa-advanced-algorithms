let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// output = [
// ["eat", "tea", "ate"],
// ["tan", "nat"],
// ["bat"]
// ]
//

// n = number of words,
// k = max word length,
// sorting each word = O(k log k)
// Time O(n * klogk) & Space O(nk) Complexity
function groupAnagramsSorting(strs) {
  const map = {};

  for (let word of strs) {
    const sorted = word.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(word);
  }

  return Object.values(map);
}

console.log("groupAnagramsSorting ->", groupAnagramsSorting(strs));

// n = number of words,
// k = max word length,
// counting characters = O(k)
// Time O(n * k) & Space O(nk) Complexity
function groupAnagramsCharacterFrequency(strs) {
  const map = {};

  for (const word of strs) {
    const count = new Array(26).fill(0);

    for (const char of word) {
      count[char.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);
}

console.log(
  "groupAnagramsCharacterFrequency ->",
  groupAnagramsCharacterFrequency(strs),
);
