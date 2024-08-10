
// ASSIGNMENT DONE ====


// METHOD ONE: USING WAIT INSIDE THE ASYNC


async function print1() {  // print1 function defination or say declaration
    const message = await applyDamage(50, 100);
    console.log(message)
}
print1() // print 1 function call 

// METHOD TWO: USING THE .the() METHOD

// Using the .then() method as I learned on the first time
applyDamage(25, 50).then((message) => print(message))
function print(message) {
    console.log(message)
}

function applyDamage(damage, currentHP) {
    return new Promise((resolve) => {
        const newHP = currentHP - damage
        setTimeout(() => {
            resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
        }, 1000)
    })
}


