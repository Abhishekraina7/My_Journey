// FOR...OF LOOP IN JAVASCRIPT specially for Arrays

/*

This is a for...of loop, which is a type of loop that iterates over the elements of an array (or other iterable). 
The const 'a' declares a constant variable a that will take on the value of each element in the array on each iteration.

*/

//ASSIGNMENT TASK

const movies = [
    'oh brother where art thou',
    'oceans eleven',
    'fight club',
    'the island',
    'shutter island',
    'the magnificent seven'
]

function logArray(arr) {
    for (const a of arr) {
        console.log(` - ${a}`)
    }
    console.log('---')
}

logArray(movies.slice(2))
logArray(movies.slice(0, -3))



let num_array = [1, 23, 4, 5, 56, 6, 6, 7, 7, 7, 8]
for (const loop of num_array) { // FOR...OF loop
    console.log(`num = ${loop}`)
}