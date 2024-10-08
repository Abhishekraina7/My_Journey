function parseLocation(locationString) {
    let err = new Error('invalid JSON string')
    try {
        const obj = JSON.parse(locationString)
        printLocationObj(obj)
    } catch (error) { console.log(`Error: ${err.message}`) }
}

// don't touch below this line

function printLocationObj(parsed) {
    console.log(`id: ${parsed.id}`)
    console.log(`discovered: ${parsed.discovered}`)
    console.log(`name: ${parsed.name}`)
    console.log(`recommendedLevel: ${parsed.recommendedLevel}`)
}

parseLocation(`
    {
        "discovered": false,
        "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
        "name": "Bandit Camp",
        "recommendedLevel": 14
    }
`)

console.log('---')

parseLocation(`
  {
    "discovered":true,
    "id":"2f8282cb-e2f9-496f-b144-c0aa4ced56db",
    "name":"Irondeep",
    "recommendedLevel":6
  }
  `)

console.log('---')

parseLocation(`
    {
        "discovered": false,
        "id": "0f12951e-0a74-4846-a1e0-10b33b13112f"  // this string is invalid because of missing comma here
    "name": "Tavern",
        "recommendedLevel": 1
    }
`)
