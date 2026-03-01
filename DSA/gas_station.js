gas = [1, 2, 3, 4];
cost = [2, 2, 4, 1];
// output: 3

// Time -> O(n)
// Space -> O(1)
function gasStation(gas, cost) {
  if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) {
    return -1;
  }

  let fuel = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    fuel += gas[i] - cost[i];

    if (fuel < 0) {
      fuel = 0;
      start = i + 1;
    }
  }

  return start;
}

console.log("gasStation ->", gasStation(gas, cost));
