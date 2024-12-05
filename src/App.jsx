import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { useState, useEffect } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLogin ? (
              <Home token={localStorage.getItem("token")} />
            ) : (
              <Login setIsLogin={setIsLogin} />
            )
          }
        />
        <Route
          path="/about"
          element={
            isLogin ? (
              <About token={localStorage.getItem("token")} />
            ) : (
              <Login setIsLogin={setIsLogin} />
            )
          }
        />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}
