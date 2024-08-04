const printCleanReviews = (reviews, badWord) => {
    for (const arr of reviews) {

        if (arr.includes(badWord)) {
            continue
        }
        console.log('Clean review: ' + arr)

    }
}

// don't touch below this line

printCleanReviews(['The movie sucks', 'I love it', 'What garbage', 'so sucky'], 'suck')
console.log('---')
printCleanReviews(['The movie sucks', 'I love it', 'What darn crap', 'darn, so sucky'], 'darn')
console.log('---')
