



// ERROR HANDLING ASSIGMENT: DONE
let err = new Error('Our servers are down, but we will be up and running soon')
async function displayLeaderBoard() {
    try {
        const leaderboard = await fetchLeaderBoard()
        console.log(leaderboard)
    }
    catch (err) {
        console.log(`Error: ${err.message}`)
    }
}

// don't touch below this line

async function fetchLeaderBoard() {
    const response = await fetch('https://fantasyquest.servers')
    return response.json()
}

displayLeaderBoard()