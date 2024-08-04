let stars = 10

for (let i = stars; i > 0; i--) {
    if (i === 1) {
        console.log(i + 'star')
        continue  // Also the break can be used
    }
    console.log(i + 'stars')
}