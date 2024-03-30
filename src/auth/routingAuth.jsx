import {
    BrowserRouter as Router,
    Route,
    Routes,
    
} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./layout/layout";

function AuthRouting() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Layout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}

export default AuthRouting;

