
// Following code helps us in understanding how Async works

console.log("I print first");
setTimeout(() => console.log("I print third because I'm was waiting for 1000 milliseconds"), 1000);
console.log("I print second");
setTimeout(function () {
    console.log('Wait na yrr I am was also coming')
}, 10000)


// ASSIGNMENT ----


const craftingCompleteWait = 400
const combiningMaterialsWait = 200
const smeltingIronBarsWait = 100
const shapingIronWait = 300

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')



