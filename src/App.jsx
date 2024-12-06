import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
import Login from "./Login";
import Home from "./home";
import Sidebar from "./Sidebar";
import Safe from "./Safe";
import Contact from "./Contact";
import { FaBars } from "react-icons/fa";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Adiciona a classe overflow-hidden quando a sidebar estiver aberta
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="relative flex h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
          }`}
        >
          {isLogin && (
            <div className="flex justify-between p-2 bg-white shadow-md">
              <button
                className="p-2 my-auto text-blue-500 transition-all duration-300 bg-white border rounded-md h-fit"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>
              <img
                src="/logo.png"
                alt="logo do site"
                className="w-16 lg:w-20"
              />
            </div>
          )}
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
