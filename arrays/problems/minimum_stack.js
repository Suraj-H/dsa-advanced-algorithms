/**
 * Minimum Stack
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 *
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 *
 * Example 1:
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * Output
 * [null,null,null,null,-3,null,0,-2]
 *
 * Explanation
 * MinStack minStack = new MinStack();
 *
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top(); // return 0
 * minStack.getMin(); // return -2
 *
 * Constraints:
 * -2^31 <= val <= 2^31 - 1
 * Methods pop, top and getMin operations will always be called on non-empty stacks.
 * At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
 *
 * Time: O(1)
 * Space: O(n)
 * where n is the number of elements in the stack
 */

// minimum stack: time: O(1) & space: O(n)
class MinimumStack {
  constructor() {
    this.stack = [];
    this.minStack = Infinity;
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.minStack = val;
    } else {
      this.stack.push(val - this.minStack);
      if (val < this.minStack) this.minStack = val;
    }
  }

  pop() {
    if (this.stack.length === 0) return;
    const popped = this.stack.pop();
    if (popped < 0) this.minStack -= popped;
  }

  top() {
    const top = this.stack[this.stack.length - 1];
    return top < 0 ? this.minStack : top + this.minStack;
  }

  getMin() {
    return this.minStack;
  }
}

const minStack = new MinimumStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("Minimum Stack: getMin: ", minStack.getMin()); // -3
minStack.pop();
console.log("Minimum Stack: top: ", minStack.top()); // 0
console.log("Minimum Stack: getMin: ", minStack.getMin()); // -2
