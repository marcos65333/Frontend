import { Route, Routes } from "react-router-dom";
import LayoutUser from "./layout/Layout";
import Feed from "./pages/feed";
import Messages from './pages/messages';
import Explorar from "./pages/explorar";
import Profile from "./pages/profile";

function UserRouting() {
    return (
      <LayoutUser>
        {(user) => (
          <Routes>
            <Route path="feed" element={<Feed user={user} />} />
            <Route path="messages" element={<Messages user={user} />} />
            <Route path="explorar" element={<Explorar user={user} />} />
            <Route path="/:username" element={<Profile />} />
          </Routes>
        )}
      </LayoutUser>
    );
  }

export default UserRouting;
