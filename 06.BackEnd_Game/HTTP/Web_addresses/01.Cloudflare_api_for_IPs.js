

// ASSIGNEMTN ==== DONE



async function fetchIPAddress(domain) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            'accept': 'application/dns-json'
        }
    })
    const respObject = await resp.json()
    const response = (respObject.Answer[0].data)
    return response
}

// don't touch below this line

const domain = 'boot.dev'
fetchIPAddress(domain).then(function (ipAddress) {
    printfunction(ipAddress)
})

function printfunction(ipAddress) {
    if (!ipAddress) {
        console.log('something went wrong in fetchIPAddress')
    } else {
        console.log(`found IP address for domain ${domain}: ${ipAddress}`)
    }

}
