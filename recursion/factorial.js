/**
 * Factorial is the product of all positive integers less than or equal to n.
 * Example:
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 *
 * Example 1:
 * Input: n = 5
 * Output: 120
 * Explanation: 5 * 4 * 3 * 2 * 1 = 120
 *
 * Example 2:
 * Input: n = 0
 * Output: 1
 * Explanation: 0 * 1 = 0
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the number of integers to multiply
 */

// factorial: time: O(n) & space: O(n)
function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}

// factorial iterative: time: O(n) & space: O(1)
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial recursive: ", factorialRecursive(5)); // 120
console.log("Factorial iterative: ", factorialIterative(5)); // 120
