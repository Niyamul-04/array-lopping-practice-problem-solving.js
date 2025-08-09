// problem : 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'








// solved:

const names = ['Tom', 'Tim', 'Tin', 'Tik'];

let result = '';

for (let i = 0; i < names.length; i++) {
    result += names[i];
}

console.log(result); 

// another ans

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let resu = numbers.join('');

console.log(resu); 


// another ans

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let re = numbers.reduce((acc, curr) => acc + curr, '');

console.log(re); 


