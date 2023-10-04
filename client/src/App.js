import { Routes, Route, Navigate } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import SinglePostPage from "./pages/SinglePost/SinglePostPage";
import Write from "./pages/Write/Write";
function App() {
  const currentUser = true;

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
        <Route path="/post/:postId" element={<SinglePostPage />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;