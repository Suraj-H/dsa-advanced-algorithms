/**
 * Fibonacci Sequence
 *
 * The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
 * Example:
 * fibonacci(5) = 0, 1, 1, 2, 3
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the number of integers in the sequence
 */

// fibonacci sequence dynamic programming bottom up: time: O(n) & space: O(n)
function fibonacciSequenceDynamicProgrammingBottomUp(n) {
  if (n < 2) return n;

  const dp = [0, 1];
  let i = 2;

  while (i <= n) {
    const temp = dp[1];
    dp[1] = dp[0] + dp[1];
    dp[0] = temp;
    i++;
  }
  return dp[1];
}

// fibonacci sequence dynamic programming topToDown (memoization): time: O(n) & space: O(n)
function fibonacciSequenceDynamicProgrammingTopDownMemoization(n, cache = {}) {
  if (n < 2) return n;

  if (cache[n]) return cache[n];  // memoization
  cache[n] =
    fibonacciSequenceDynamicProgrammingTopDownMemoization(n - 1, cache) +
    fibonacciSequenceDynamicProgrammingTopDownMemoization(n - 2, cache);
  return cache[n];
}

console.log(
  "Fibonacci sequence dynamic programming bottom up: ",
  fibonacciSequenceDynamicProgrammingBottomUp(5),
); // 5
console.log(
  "Fibonacci sequence dynamic programming top to down memoization: ",
  fibonacciSequenceDynamicProgrammingTopDownMemoization(5),
); // 5
