temps = [65, 70, 68, 60, 55, 75, 80, 74];
// output : [1,4,3,2,1,1,0,0]

// Each element: Pushed once & Popped once
// Total = 2n operations
// Time → O(n)
// Space → O(n)
function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = [];

  for (let i = 0; i < temps.length; i++) {
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }

    stack.push(i);
  }

  return result;
}

console.log("dailyTemperatures ->", dailyTemperatures(temps));
