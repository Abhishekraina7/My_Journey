
// CONCEPT HERE ARE IMPORTANT TO UNDERSTAND

// THE .CONCAT() METHOD.

let arr1 = [1, 2, 3]
arr1 = arr1.concat([4, 5, 6])
arr1 = arr1.concat([7, 8, 9])
console.log(arr1)



// The SPREAD SYNTAX

let arr2 = ['a', 'b', 'c']
let arr3 = [...arr2, 'd', 'e', 'f']
console.log(arr3)


// ASSIGNMENT TASK

const uploadNewMovies = (oldMovies, newMovies) => {
    let all_movies = [...oldMovies, ...newMovies]
    return all_movies
}

// don't touch below this line

const oldMovies = ['Once Upon a Time', 'Django Unchained', 'The Hateful 8']
const newMovies = ['Inglorious Basterds', 'Dune']
const allMovies = uploadNewMovies(oldMovies, newMovies)

console.log('All movies database:')
logArray(allMovies)


function logArray(arr) {
    for (const a of arr) {
        console.log(` - ${a}`)
    }
    console.log('---')
}
