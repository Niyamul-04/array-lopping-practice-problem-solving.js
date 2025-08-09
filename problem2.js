// Problem : 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]



// solved:
const numbers = [12, 98, 5, 41, 23, 78, 46];

const evens = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0 ){
        evens.push(numbers[i]);
    }
}

// console.log(evens);

// another way solve this problem

const elements = [12, 98, 5, 41, 23, 78, 46];

const even = numbers.filter(num => num % 2 === 0);

// console.log(even); 

// another way solve this problem

const num = [12, 98, 5, 41, 23, 78, 46];
const evenss = [];

for (const num of numbers){
    if(
        num % 2 === 0
    ){
        evenss.push(num);
    }
}

console.log(evenss);

