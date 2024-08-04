/*

## You can access properties using dot notation, like person.name, or bracket notation, like person["name"]. ##
*/

const getCountsByTitle = (movies) => {

    const movies_count = {}  // this is object which will store value something liek    -- Ice Age: 1--

    for (let movie_count of movies) {

        if (!movies_count[movie_count]) {
            movies_count[movie_count] = 0
        }
        movies_count[movie_count]++
    }
    return movies_count
}

// don't touch below this line

function test(movies) {
    const counts = getCountsByTitle(movies)
    for (const [movie, count] of Object.entries(counts)) {
        console.log(`'${movie}' has ${count} reviews`)
    }
    console.log('---')
}

test([
    'Ice Age',
    'The Forgotten',
    'The Northman',
    'American Psycho',
    'Ice Age',
    'Ice Age',
    'American Psycho'
])

test([
    'Big Daddy',
    'Big Daddy',
    'The Big Short',
    'The Big Short',
    'The Big Short'
])
