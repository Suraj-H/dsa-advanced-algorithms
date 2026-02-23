str = "()[]{}";

// Time: O(n)
// Space: O(n) - worst case all opens
function isValidParentheses(str) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log("isValidParentheses ->", isValidParentheses(str));
