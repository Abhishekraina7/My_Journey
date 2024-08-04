

const fruits = [];

fruits.push('Orange')
console.log(fruits)
// this works 
//BUT
fruits = ['banana']
console.log(fruits)
// ERROR: TypeError: Assignment to constant variable.

//LESS0N
/*
It's important to note that const arrays can still be modified, they just can't be reassigned. 
That means we can add and remove elements, but we can't set a new array value with the assignment operator: =.
*/