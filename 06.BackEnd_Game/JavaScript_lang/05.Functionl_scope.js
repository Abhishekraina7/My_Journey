function isMovieValid(title) {
    const len = title.length
    function movieLength(title) {
        // ----before const len was here--- which made its scope limited to movielength function only
        return len
    }

    // don't touch above this line

    movieLength(title)
    return len > 2
}

// don't touch below this line

function test(title) {
    const valid = isMovieValid(title)
    console.log(`'${title}' is valid: ${valid}`)
}

test('The League of Extraordinary Gentlemen')
test('Hunt for Red October')
test('007')
test('')
test('12')
