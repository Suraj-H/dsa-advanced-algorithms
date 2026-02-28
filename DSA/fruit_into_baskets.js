fruits = [3, 3, 2, 1, 2, 1, 0];
// output : 4

function fruitIntoBaskets(fruits) {
  // Initialization
  let maxFruit = 0;
  let basket = {};
  let start = 0;

  // Iteration
  for (let end = 0; end < fruits.length; end++) {
    basket[fruits[end]] = 1 + (basket[fruits[end]] || 0);

    // Contracting the Window
    while (Object.keys(basket).length > 2) {
      basket[fruits[start]]--;
      if (basket[fruits[start]] === 0) {
        delete basket[fruits[start]];
      }
      start++;
    }

    maxFruit = Math.max(maxFruit, end - start + 1);
  }

  return maxFruit;
}

console.log("fruitIntoBaskets ->", fruitIntoBaskets(fruits));
