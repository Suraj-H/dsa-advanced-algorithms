/**
 * Sliding Window Maximum
 *
 * You are given an array of integers nums and an integer k.
 * There is a sliding window of size k that starts at the left edge of the array.
 * The window slides one position to the right until it reaches the right edge of the array.
 * Return a list that contains the maximum element in the window at each step.
 *
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 * 1 <= nums.length <= 100000
 * -10000 <= nums[i] <= 10000
 * 1 <= k <= nums.length
 *
 * Time: O(n)
 * Space: O(n)
 * where n is the length of the array and k is the size of the window
 */

class Deque {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
  }

  pushBack(item) {
    this.items.push(item);
  }

  popBack() {
    return this.items.pop();
  }

  front() {
    return this.items[this.frontIndex];
  }

  popFront() {
    if (this.frontIndex < this.items.length) {
      return this.items[this.frontIndex++];
    }
    return undefined;
  }

  size() {
    return this.items.length - this.frontIndex;
  }

  back() {
    return this.items[this.items.length - 1];
  }
}

// sliding window maximum: time: O(n) & space: O(n)
function slidingWindowMaximumSlidingWindowDeque(nums, k) {
  const length = nums.length;
  const result = new Array(length - k + 1);
  const windowQueue = new Deque();
  let R = 0;
  let L = 0;

  while (R < length) {
    while (windowQueue.size() && nums[windowQueue.back()] < nums[R]) {
      windowQueue.popBack();
    }
    windowQueue.pushBack(R);

    if (L > windowQueue.front()) {
      windowQueue.popFront();
    }

    if (R + 1 >= k) {
      result[L] = nums[windowQueue.front()];
      L++;
    }
    R++;
  }

  return result;
}

console.log( "Sliding Window Maximum: ", slidingWindowMaximumSlidingWindowDeque([1,2,1,0,4,2,6], 3)); // [2,2,4,4,6]
