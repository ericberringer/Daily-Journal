let entries = []

export const useEntries = () => {
    return entries.slice()
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => entries = parsedEntries)
            // What should happen when we finally have the array?
}

console.log(getEntries())