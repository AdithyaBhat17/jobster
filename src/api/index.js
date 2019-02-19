export function fetchJobsAPI(body) {
    return fetch(`https://jobs.github.com/positions.json?markdown=true&description=${body === undefined ? 'all' : body}`, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json; charset=utf-8;"
        }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}