import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Login from "./Login";
import Home from "./home";
import Sidebar from "./Sidebar";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      {isLogin && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
        />
        <Route
          path="/about"
          element={isLogin ? <About /> : <Login setIsLogin={setIsLogin} />}
        />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}
