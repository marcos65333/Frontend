import React, { useContext, useCallback, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { jwt, setJWT,role,setRole} = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  const [error, setError] = useState(false);

  const login = useCallback(({ email, password }) => {
    setState({ loading: true, error: false });
    loginService({ email, password })
      .then(res => {
        window.localStorage.setItem('jwt', res.access_token);
        setState({ loading: false, error: false });
        setJWT(res.access_token);
      })
      .catch(err => {
        window.localStorage.removeItem('jwt');
        setState({ loading: false, error: true });
        setError(err)
       });
  }, [setJWT]);

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt');
    setJWT(null);
    setRole(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    role: role,
    error: error
  };
}