import { EndPoint } from '../config/config.js';
const ENDPOINT = EndPoint();

export default async function login({ email, password }) {
  try {
    const response = await fetch(`${ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ 
        email,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      throw new HTTPException(response.status, errorData.detail);
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-lanzar el error para que pueda ser capturado externamente si es necesario
  }
}

class HTTPException {
  constructor(status_code, detail) {
    this.status_code = status_code;
    this.detail = detail;
  }
}