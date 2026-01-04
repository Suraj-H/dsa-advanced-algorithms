# Advanced Algorithms

A collection of array algorithm implementations following advanced problem-solving patterns. This repository contains JavaScript implementations of common array algorithms and LeetCode-style problems with examples and test cases.

## 📁 Project Structure

```
advanced-algorithms/
└── arrays/
    ├── algorithms/
    │   ├── kadanes_algorithm.js
    │   ├── prefix_sums.js
    │   ├── sliding_window_fixed.js
    │   ├── sliding_window_variable.js
    │   └── two_pointers.js
    └── problems/
        ├── 3sum.js
        ├── best_time_to_buy_and_sell_stock.js
        ├── container_with_most_water.js
        ├── longest_substring_without_repeating_characters.js
        ├── trapping_rain_water.js
        ├── two_sum.js
        └── two_sum_II.js
```

## 🎯 Core Algorithms

Core algorithm patterns and techniques in `arrays/algorithms/`:

### 1. **Kadane's Algorithm** (`kadanes_algorithm.js`)

- Finds the maximum sum of a contiguous subarray
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- Includes sliding window variation that returns indices

### 2. **Prefix Sums** (`prefix_sums.js`)

- Data structure for O(1) subarray sum queries
- Preprocessing: O(n)
- Query: O(1)

### 3. **Sliding Window - Fixed Size** (`sliding_window_fixed.js`)

- Checks for duplicate elements within a fixed window size
- **Time Complexity:** O(n)
- Uses Set for efficient lookups

### 4. **Sliding Window - Variable Size** (`sliding_window_variable.js`)

- Longest subarray with same value
- Shortest subarray with sum ≥ target
- **Time Complexity:** O(n)

### 5. **Two Pointers** (`two_pointers.js`)

- Palindrome checking (with alphanumeric filtering)
- Two Sum on sorted array
- **Time Complexity:** O(n)

## 💡 Problems

LeetCode-style problems in `arrays/problems/`:

### 1. **Two Sum** (`two_sum.js`)

- Find indices of two numbers that add up to target
- Uses hash table approach
- **Time Complexity:** O(n)

### 2. **Two Sum II** (`two_sum_II.js`)

- Two Sum on sorted array (1-indexed)
- Uses two pointers technique
- **Time Complexity:** O(n)

### 3. **3Sum** (`3sum.js`)

- Find all unique triplets that sum to zero
- Uses two pointers with sorting
- **Time Complexity:** O(n²)

### 4. **Container With Most Water** (`container_with_most_water.js`)

- Find maximum area between two vertical lines
- Uses two pointers technique
- **Time Complexity:** O(n)

### 5. **Trapping Rain Water** (`trapping_rain_water.js`)

- Calculate trapped rainwater between bars
- Uses two pointers with max tracking
- **Time Complexity:** O(n), **Space:** O(1)

### 6. **Best Time to Buy and Sell Stock** (`best_time_to_buy_and_sell_stock.js`)

- Find maximum profit from single buy/sell
- Includes DP and sliding window approaches
- **Time Complexity:** O(n)

### 7. **Longest Substring Without Repeating Characters** (`longest_substring_without_repeating_characters.js`)

- Find length of longest substring with unique characters
- Uses sliding window technique
- **Time Complexity:** O(n), **Space:** O(m) where m is unique chars

## 🚀 Usage

Run any file directly with Node.js:

```bash
# Run algorithm examples
node arrays/algorithms/kadanes_algorithm.js
node arrays/algorithms/sliding_window_fixed.js

# Run problem solutions
node arrays/problems/two_sum.js
node arrays/problems/container_with_most_water.js
```

Each file contains:

- Problem/algorithm explanation
- Example inputs/outputs
- Working implementation
- Test cases with `console.log` statements

## 📝 Algorithm Patterns

### Sliding Window

- **Fixed Size:** Maintain a window of constant size
- **Variable Size:** Expand/contract window based on condition

### Two Pointers

- Start from both ends or move pointers based on condition
- Efficient for sorted arrays and palindrome problems

### Dynamic Programming

- Kadane's algorithm uses DP to track maximum subarray sum
- Optimal substructure: max sum ending at index i

### Prefix Sums

- Precompute cumulative sums for O(1) range queries
- Useful for multiple queries on the same array

### Hash Tables

- Efficient lookups for complement finding
- Used in Two Sum and similar problems

## 🔧 Requirements

- Node.js (any recent version)

## 📚 Notes

- All implementations prioritize clarity and educational value
- Time and space complexities are documented in comments
- Each algorithm/problem includes example test cases
- Code follows consistent formatting and naming conventions
- Problems are organized separately from core algorithm patterns
