
function getIsPowerUser(numReviews) {
    let isPowerUser = null
    if (numReviews > 10) {
        isPowerUser = true
    }
    else {
        isPowerUser = false
    }
    return isPowerUser
}

// don't touch below this line

function test(numReviews) {
    const isPowerUser = getIsPowerUser(numReviews)
    console.log(`Number of reviews: ${numReviews}, is power user: ${isPowerUser}`)
}

test(100)
test(50)
test(10)
test(5)
test(2)
