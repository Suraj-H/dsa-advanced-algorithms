s = "(()())";
// output : 6

// n is the length of the input string
// Time -> O(n)
// Space -> O(n)
function longestValidParentheses(s) {
  let stack = [-1];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLength;
}

console.log("longestValidParentheses ->", longestValidParentheses(s));
