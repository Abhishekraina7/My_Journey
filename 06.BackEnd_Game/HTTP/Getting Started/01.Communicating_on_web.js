
const apiKey = generateKey()

// const items = await getItemData()
// logItems(items) ======got error in this code as in course

// USING .then()

getItemData().then(function (items) {
    logItems(items)
})

// don't touch below this line


async function getItemData() {// this function is implementing the API part where it is calling server/
    const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    return response.json() // Response from the server in the form of json file.
}

function generateKey() { // it generates the random keys for apiKey variable
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logItems(items) {
    for (const item of items) {
        console.log(item.name)
    }
}
