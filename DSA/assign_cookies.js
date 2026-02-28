greeds = [1, 2, 3];
cookies = [1, 1];
// Output : 1

// n is the number of children
// m is the number of cookies
// sort the greeds and cookies arrays in O(n log n + m log m)
// iterate through the arrays in O(n + m)
// Time -> O(n log n + m log m)
// Space -> O(1) : constant amount of space for variables.
function assignCookies(greeds, cookies) {
  greeds.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let count = 0;
  let i = 0,
    j = 0;

  while (i < greeds.length && j < cookies.length) {
    // current cookie can satisfy current child
    if (cookies[j] >= greeds[i]) {
      count++;
      i++;
    }
    j++;
  }

  return count;
}

console.log("assignCookies ->", assignCookies(greeds, cookies));
