export function fetchJobsAPI(body) {
    // console.log(body)
    const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?markdown=true${body !== undefined ? `&description=${body}` : ''}`
    
    // console.log(url)
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json; charset=utf-8;"
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}