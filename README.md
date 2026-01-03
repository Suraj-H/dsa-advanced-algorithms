# Advanced Algorithms

A collection of array algorithm implementations following the advanced problem-solving patterns. This repository contains JavaScript implementations of common array algorithms with examples and test cases.

## 📁 Project Structure

```
advanced-algorithms/
└── arrays/
    ├── kadanes_algorithm.js
    ├── prefix_sums.js
    ├── sliding_window_fixed.js
    ├── sliding_window_variable.js
    └── two_pointers.js
```

## 🎯 Algorithms Covered

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

## 🚀 Usage

Run any file directly with Node.js:

```bash
node arrays/kadanes_algorithm.js
node arrays/sliding_window_fixed.js
node arrays/two_pointers.js
```

Each file contains:
- Algorithm explanation
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

## 🔧 Requirements

- Node.js (any recent version)

## 📚 Notes

- All implementations prioritize clarity and educational value
- Time and space complexities are documented in comments
- Each algorithm includes example test cases
- Code follows consistent formatting and naming conventions
