import {EndPoint} from '../config/config.js'
const ENDPOINT = EndPoint();

async function post(formData) {
    try{
   
      const response = await fetch(`${ENDPOINT}/api/post/create_post`, {
          method: 'POST',
          body: formData,
          headers:{
              'authorization': `Bearer ${localStorage.getItem('jwt')}`,
              
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



 async function eliminar(post_id) {
  try{
    console.log(post_id);
    const response = await fetch(`${ENDPOINT}/api/post/delete_post/${post_id}`, {
        method: 'DELETE',
        headers:{
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new HTTPException(response.status, errorData);
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

export {post,eliminar}