'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    const massive = []
  
    for (let i = start; i <= end; i++) {
      massive.push(i)
    }
  
    return massive
  }
  
  console.dir(range(15, 30))
module.exports = { range };
