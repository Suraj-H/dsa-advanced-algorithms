s = "3[a2[c]]";
// output : "accaccacc"

// n be the length of the input string
// S be the length of the decoded output string.
// Time -> O(S)
// Space -> O(S) (stack + result)
function decodeString(s) {
  let stack = [];
  let currentString = "";
  let currentNum = 0;

  for (let char of s) {
    // "[": Start of a new sequence
    if (char === "[") {
      stack.push(currentString);
      stack.push(currentNum);
      currentNum = 0;
      currentString = "";
    }
    // "]": End of a sequence
    else if (char === "]") {
      let num = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    }
    // Digit
    else if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    }
    // Character
    else {
      currentString += char;
    }
  }

  return currentString;
}

console.log("decodeString ->", decodeString(s));
