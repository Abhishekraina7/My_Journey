const applyDamage = (damage, currentHP) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (currentHP - damage <= 0) {
                reject(`The player suffers ${damage} points of damage and has fallen unconscious.`)
            }
            if (currentHP - damage >= 0) {
                resolve(`The player suffers ${damage} points of damage and has ${currentHP - damage} hit points remaining.`)
            }
        }, 1100)
    })
}

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {   // this is sort of main function which calls another function and finally gives output in the console
    console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
    applyDamage(damage, currentHP).then((message) => {
        console.log(`...applyDamage resolved with: ${message}`)
    }).catch((message) => {
        console.log(`...applyDamage rejected with: ${message}`)
    })
}

runApplyDamageTest(27, 50)   // function call with input parameters
// setTimeout(() => console.log('wait'), 1100)

runApplyDamageTest(50, 50)
// setTimeout(function () { }, 1100)

// runApplyDamageTest(110, 100)
// setTimeout(function () { }, 1100)

