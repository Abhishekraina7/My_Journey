/*
Ternary's latin root means "3", and it's the only JavaScript operator that takes three operands.

A condition followed by a question mark (?)
An expression to execute if the condition is truthy followed by a colon (:)
The expression to execute if the condition is falsy.
*/

//Using If-else

const bobbyAge = 17;
const legalAge = 18;

// find wheather bobby is adult or not if the input varies

if (bobbyAge >= legalAge) {
    console.log("Bobby is an adult");
}
else {
    console.log('Bobby is not an adult');
}

//Using the ternary operator

const message = bobbyAge >= legalAge ? 'Bobby is an adult' : 'Bobbby is not an adult';
console.log(message);

// SAME RESULT WITH LESS LINES OF CODE