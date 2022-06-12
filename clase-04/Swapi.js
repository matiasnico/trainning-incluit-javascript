import fetch from "node-fetch" // Librería para Node

const BASE_URL = 'https://swapi.dev/api'

const opts = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

const getPeople = async () => {
    const people = await fetch(`${BASE_URL}/people/`, opts)

    return people.json()
}

const people = await getPeople()

console.log('people', people)
console.log('people', people.name)
console.log('people', people.vehicles)