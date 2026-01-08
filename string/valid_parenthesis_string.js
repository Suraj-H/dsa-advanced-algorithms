/**
 * Valid Parenthesis String
 *
 * Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
 *
 * The following rules define a valid string:
 *
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "(*)"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 100
 * s contains only '(', ')' and '*'.
 *
 * Time: O(n)
 * Space: O(1)
 * where n is the length of the string
 */

// valid parenthesis string: time: O(n) & space: O(1)
function isValidParenthesisStringGreedyAlgorithm(s) {
  let leftMin = 0;
  let leftMax = 0;

  for (let char of s) {
    if (char === "(") {
      leftMin++;
      leftMax++;
    } else if (char === ")") {
      leftMin--;
      leftMax--;
    } else {
      leftMin--;
      leftMax++;
    }

    if (leftMax < 0) return false;
    if (leftMin < 0) leftMin = 0;
  }

  return leftMin === 0;
}

console.log(isValidParenthesisStringGreedyAlgorithm("(*)")); // true
console.log(isValidParenthesisStringGreedyAlgorithm("(*))")); // true
console.log(isValidParenthesisStringGreedyAlgorithm("((**)")); // true
console.log(isValidParenthesisStringGreedyAlgorithm("(((*)")); // false
console.log(
  isValidParenthesisStringGreedyAlgorithm(
    "(((((()*)(*)*))())())(()())())))((**)))))(()())()"
  )
); // false
