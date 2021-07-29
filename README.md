# Data Structures and Algorithms

![example workflow](https://github.com/kevinburkett/data-structures-and-algorithms/actions/workflows/codeql-analysis.yml/badge.svg)

## Big O Notation

[![Big O Cheat Sheet](https://www.bigocheatsheet.com/img/big-o-complexity-chart.png)](https://www.bigocheatsheet.com/)

### Time

- Constant: O(1)
  - Arrays
  - Hash Maps/Tables
- Logarithmic: O(log n)
  - Binary Search
  - Binary Search Tree
- Linear: O(n)
  - Mean of Array
  - Mode of Array
- Linearithmic: O(n log n)
  - String Sort
  - Median of Array
  - Comparison Sort
  - Heapsort
  - Merge Sort
  - Fast Fourier Transform
- Quadratic: O(n²)
  - Quick Sort
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Iterate Two Arrays
  - Two Sums
- Expontential: O(2^n)
  - Traveling Salesman using Dynamic Programming
  - Determining if two logical stagements are equivalent using brute-force search
- Factorial: O(n!)
  - Traveling Salesman using brute-force search
  - Enumerating all partitions of a Set

### Space

- Constant: O(1)
  - Binary Search
  - Binary Search Tree
  - Mean of Array
- Logarithmic: O(log n)
  - Quick Sort
- Linear: O(n)
  - Median of Array
  - Mode of Array
  - Bubble Sort
- Linearithmic: O(n log n)
- Quadratic: O(n²)
- Expontential: O(2^n)
- Factorial: O(n!)

## Project Setup

```Powershell
npm init -y
npm i --save-dev nodemon karma-cli karma mocha chai karma-mocha karma-chai karma-chrome-launcher
git init
git add .
git commit -m "Add Project Files"
npm run test
```
