const BASE_URL = process.env.API_BASE_URL || '/api/v1';

function createRequest(url, method, payload) {
  return new Request(url, {
    body: JSON.stringify(payload),
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function signIn(payload) {
  const res = await fetch(createRequest(`${BASE_URL}/auth/signIn`, 'POST', payload));
  return res.json();
}

async function whoAmI() {
  const res = await fetch(`${BASE_URL}/auth/whoAmI`);
  return res.json();
}

export default {
  signIn,
  whoAmI,
};
