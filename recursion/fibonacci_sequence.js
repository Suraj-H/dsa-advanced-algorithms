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

// fibonacci sequence recursive: time: O(2^n) & space: O(n)
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// fibonacci sequence iterative: time: O(n) & space: O(1)
function fibonacciIterative(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return b;
}

console.log("Fibonacci sequence recursive: ", fibonacciRecursive(5)); // 5
console.log("Fibonacci sequence iterative: ", fibonacciIterative(5)); // 5
