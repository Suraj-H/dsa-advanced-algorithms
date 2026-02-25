// Max Points You Can Obtain From Cards
// https://www.hellointerview.com/learn/code/sliding-window/maximum-points-you-can-obtain-from-cards

cards = [1, 100, 10, 0, 4, 5, 6];
k = 3;

// Time → O(n)
// Space → O(1)
function maxScore(cards, k) {
  const total = cards.reduce((sum, card) => sum + card, 0);
  if (k === cards.length) {
    return total;
  }

  let state = 0;
  let maxPoints = -Infinity;
  let start = 0;

  for (let end = 0; end < cards.length; end++) {
    state += cards[end];

    if (end - start + 1 === cards.length - k) {
      maxPoints = Math.max(maxPoints, total - state);
      state -= cards[start];
      start++;
    }
  }

  return maxPoints;
}

console.log("maxScore ->", maxScore(cards, k));
