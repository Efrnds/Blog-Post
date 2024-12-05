import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Login from "./Login";
import Home from "./home";
import Sidebar from "./Sidebar";
import Safe from "./Safe";
import Contact from "./Contact";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="grid w-full h-full grid-cols-6">
        <div className="w-full h-full col-span-1 ">
        {isLogin && (
            <Sidebar />
          )}
          </div>
        <main className={"col-span-5 p-4"}>
          <Routes>
            <Route
              path="/"
              element={isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
            />
            <Route
              path="/sobre"
              element={isLogin ? <About /> : <Login setIsLogin={setIsLogin} />}
            />
            <Route
              path="/metodo-safe"
              element={isLogin ? <Safe /> : <Login setIsLogin={setIsLogin} />}
            />
            <Route
              path="/contato"
              element={
                isLogin ? <Contact /> : <Login setIsLogin={setIsLogin} />
              }
            />
            <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
