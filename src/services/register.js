import {EndPoint} from '../config/config.js'
const ENDPOINT = EndPoint();

export  default async function register(data) {
    try{
      const response = await fetch(`${ENDPOINT}/api/user/create_user`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
              'content-type': 'application/json'
          }
      });
      if (!response.ok) {
        const errorData = await response.json();
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