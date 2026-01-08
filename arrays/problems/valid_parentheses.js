/**
 * Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length <= 10000
 * s consists of parentheses only '()[]{}'.
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the length of the string
 */

// valid parentheses: time: O(n) & space: O(n)
function isValidParenthesesStack(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (map[char]) stack.push(map[char]);
    else if (stack.length === 0 || stack.pop() !== char) return false;
  }

  return stack.length === 0;
}

console.log("Valid Parentheses: ", isValidParenthesesStack("()")); // true
console.log("Valid Parentheses: ", isValidParenthesesStack("()[]{}")); // true
console.log("Valid Parentheses: ", isValidParenthesesStack("(]")); // false
console.log("Valid Parentheses: ", isValidParenthesesStack("([)]")); // false
console.log("Valid Parentheses: ", isValidParenthesesStack("{[]}")); // true
console.log("Valid Parentheses: ", isValidParenthesesStack("{{}}")); // true
console.log("Valid Parentheses: ", isValidParenthesesStack("{{")); // false
console.log("Valid Parentheses: ", isValidParenthesesStack("}}")); // false
console.log("Valid Parentheses: ", isValidParenthesesStack("}{")); // false
console.log("Valid Parentheses: ", isValidParenthesesStack("}{{}")); // false
