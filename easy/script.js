// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input:[1,4,7] Output:4
// Input: [10, 5] Output: 7.5
// Input: [1.5, 3, 2.5, 1] Output: 2

const total = (acc, value) => acc + value;

var arrayAvg = (nums = []) => {
    var avg = nums.reduce(total) / nums.length
    return avg;
}

let grades = [99, 86, 90, 90, 95, 79];
let scores = [100, 102, 96];
let c = [1,4,7];

console.log(arrayAvg(grades));
console.log(arrayAvg(scores));
console.log(arrayAvg(c));

