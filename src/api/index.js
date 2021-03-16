const BASE_URL = 'http://localhost:3000/api/v1';

function createRequest(url, method, payload) {
    return new Request(url, {
        body: JSON.stringify(payload),
        method,
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

async function signIn(payload) {
    const res = await fetch(createRequest(`${BASE_URL}/auth/signIn`, 'POST', payload));
    console.log(await res.json());
}

export default {
    signIn
}