


// DEBUG ASSIGNMENT ----DONE





const apiKey = generateKey()
const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'

getData().then(function (items) {
    logItems(items)
})

// don't touch below this line

async function getData() {
    const response = await fetch(itemURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

function generateKey() {
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
