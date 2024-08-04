const user = {
    getFirstReview() {
        return this.reviews[0] // this keyword acts as user (as in case of normal use case)
    },
    reviews: ['I hate Ice Age', 'I didn\'t enjoy it at all', 'What a fabulous film'],
    name: 'Bob Doogle'
}

console.log(user.getFirstReview())
// don't touch below this line
