
//ASSIGNMENT ====== DONE


//The URL API is built into JavaScript. You can create a new URL object:

// Learn more about URL interface here: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL


function getDomainNameFromURL(url) {
    const extract = new URL(url) // URL api
    const hostname = extract.hostname
    return hostname
}

// don't touch below this line

const bootdevURL = 'https://boot.dev/courses/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`)
