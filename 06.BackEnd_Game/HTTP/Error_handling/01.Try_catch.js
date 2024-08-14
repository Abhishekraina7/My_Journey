
// use the try-catch block to catch any anticipated error

// try {
//     const speed = car.speed
// } catch (err) {
//     console.log(`An error was thrown: ${err}`)
//     // the code cleanly logs:
//     // "An error was thrown: ReferenceError: car is not defined"
// }


// ASSIGNMENT ==== Done 

try {
    printCharacterStats(4)
    printCharacterStats('ten')
    printCharacterStats(10)
}
catch (err) {
    console.log(`Error: ${err}`) //Without try catch error a huge error with stacktrace is thrown which is not easy to understand.
}

// don't touch below this line

function printCharacterStats(level) {
    if (isNaN(level)) {
        throw new Error('Parameter is not a number!')
    }
    console.log(`Your character is level ${level}!`)
}


