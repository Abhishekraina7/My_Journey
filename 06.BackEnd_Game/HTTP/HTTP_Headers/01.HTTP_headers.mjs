
//ASSIGNMENT === DONE

function logContentType(resp) {
    let err = new Error('This is the error message');
    try {
        const response = resp.headers.get('Name')
        console.log(response)
    }
    catch (err) {
        console.log(`Error: ${err.message}`)
    }

}

// don't touch below this line

const apiKey = generateKey()
const bootdevAPIDomain = 'api.boot.dev'

const items = await getItemData(bootdevAPIDomain)
logContentType(items)

// getItemData(bootdevAPIDomain).then((items) => logContentType(items))

async function getItemData(domain) {
    const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json',
            'Name': 'Abhi'
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
