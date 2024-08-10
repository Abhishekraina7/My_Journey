

// structure of A Promise in JS

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (getRandomBool()) {
            resolve("resolved!")
        } else {
            reject("rejected!")
        }
    }, 1000)
})

function getRandomBool() {
    return Math.random() < 1
}



//implementing the promise using the .then() and .catch() known as handlers

// .then() is something like if promise is fulfilled return the object (which can a be server response in case of a api call)

// .catch() is somthing like if process gets failed then return a certain output to the console

// It is kinna like If else statment.


promise.then((message) =>
    console.log(`The promise finally ${message}`)
).catch((message) => {
    console.log(`The promise finally ${message}`)
})