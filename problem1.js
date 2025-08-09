// Problem: 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']





// Solved
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const reversed = [];

for(let i = colors.length - 1; i >= 0; i--){
    reversed.push(colors[i]);
}
console.log(reversed);
