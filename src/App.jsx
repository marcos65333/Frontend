import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect
} from "react-router-dom";
import AuthRouting from './auth/routingAuth';
import UserRouting from './app/routingApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/*" element={<UserRouting />} />
        <Route path="/*" element={<AuthRouting />} />
        <Route render={() => (<redirect to="/" />)} /> 
      </Routes>
    </Router>
  );
}

export default App;
