// Time:
// push → O(1)
// pop → O(1)
// top → O(1)
// getMin → O(1)
// Space: O(n)
class MinStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    let min = this.stack.length === 0 ? value : Math.min(value, this.getMin());
    this.stack.push({ value: value, min: min });
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1].value;
  }

  getMin() {
    return this.stack[this.stack.length - 1].min;
  }
}

const minStack = new MinStack();

minStack.push(5);
console.log("minStack ->", minStack.getMin());
minStack.push(2);
minStack.push(3);
minStack.push(7);

console.log("minStack ->", minStack.getMin());

minStack.pop();

console.log("minStack ->", minStack.getMin());
minStack.pop();
console.log("minStack ->", minStack.getMin());
minStack.push(7);
console.log("minStack ->", minStack.top());
