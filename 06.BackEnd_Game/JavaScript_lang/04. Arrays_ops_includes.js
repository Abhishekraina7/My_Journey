// checking whether any desired element is present in an array or not is very easy.


fruits = ['apple', 'orange', 'banana']
console.log(fruits.includes('orange'))
// Prints: true


// ASSIGNMENT TASK

function getCleanRank(reviewWords) {
    let bad_word_checker = ['dang', 'shoot', 'heck']
    let badWordCount = 0
    for (let var1 of reviewWords) {
        if (var1.includes('dang') === true) {
            badWordCount++
        }
        else if (reviewWords.includes('shoot') === true) {
            badWordCount++
        }
        else if (reviewWords.includes('heck') === true) {
            badWordCount++
        }

    }

    if (badWordCount === 0) {
        return 'clean'; // No bad words
    } else if (badWordCount === 1) {
        return 'dirty'; // 1 bad word
    } else {
        return 'filthy'; // 2 or more different bad word

    }

}

// Don't edit below this line

function test(reviewWords) {
    const cleanRank = getCleanRank(reviewWords)
    console.log(`'${reviewWords}' has rank: ${cleanRank}`)
}

test(['avril', 'lavigne', 'has', 'best', 'dang', 'tour'])
test(['what', 'a', 'bad', 'film'])
test(['oh', 'my', 'heck', 'I', 'hated', 'it'])
test(['ripoff'])
test(['That', 'was', 'a', 'pleasure'])
test(['shoot!', 'I', 'cant', 'say', 'I', 'liked', 'the', 'dang', 'thing'])
test(['shoot', 'dang', 'heck'])
