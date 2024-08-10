

//ASSIGNMENT ==== DONE 
// Learned that two different URL paths denote different resources.
// Like this time we extracted the location of the users instead of users info by just changing the path of URL



const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'

// don't touch below this line
apiKey = generateKey()
async function The_api_call() {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    // return response
    console.log(response)
}

// The_api_call().then(function (locations) {
//     logLocations(locations)
// })

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}
function logLocations(locations) {
    for (const location of locations) {
        console.log(`Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`)
    }
}
