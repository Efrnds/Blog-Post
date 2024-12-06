import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import Login from "./Login";
import Home from "./home";
import Sidebar from "./Sidebar";
import Safe from "./Safe";
import Contact from "./Contact";
import { FaBars, FaTimes } from "react-icons/fa";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="relative flex h-screen">
        <Sidebar isOpen={isSidebarOpen} />
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <div className="flex justify-between p-2 bg-white shadow-md ">
            <button
              className="p-2 text-blue-500 transition-all duration-300 bg-white border rounded-md"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* <img src="" alt=""> */}
          </div>
          <div className="p-4">
            <Routes>
              <Route
                path="/"
                element={isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
              />
              <Route
                path="/sobre"
                element={
                  isLogin ? <About /> : <Login setIsLogin={setIsLogin} />
                }
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
              <Route
                path="/login"
                element={<Login setIsLogin={setIsLogin} />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
