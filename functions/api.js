export async function fetchJson(url, options = {}) {
    const headers = {accept: 'application/json', ...options.headers}
    const rep = await fetch(url, {...options, headers})

    if(rep.ok) {
        return rep.json()
    }
    throw new Error()
}