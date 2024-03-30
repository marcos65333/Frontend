import React, { useState, useEffect } from "react";
const UserContext = React.createContext({});
import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();


export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.localStorage.getItem('jwt'));
  const [role, setRole] = useState(window.localStorage.getItem('role'));
  const  [jwtStatus, setJwtStatus] = useState(true);

  const tokenStatus = {
    "success": "success",
    "msg": "Signature verification failed",
    "error":"Token has expired" 
  }

  const verifyJWT = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/api/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
      });
      const data = await response.json();
      if (data.msg === tokenStatus.msg || data.msg === tokenStatus.error) {
        window.localStorage.removeItem('jwt');
        setJwtStatus(false);
        setJWT(null);
        return <Navigate to={'/login'} />;
      }
     
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
  }, [ENDPOINT]);

  
  if (!jwtStatus) {
      window.localStorage.removeItem('jwt');
  }


  return (
    <UserContext.Provider value={{ jwt, setJWT, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;