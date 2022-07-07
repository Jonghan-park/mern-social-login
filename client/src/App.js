import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
