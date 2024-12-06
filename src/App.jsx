import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
          className={`flex-1 transition-all duration-300 ease-in-out overflow-auto ${
            isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
          }`}
          onClick={closeSidebar} // Fecha a sidebar ao clicar no main
        >
          {isLogin && (
            <div className="flex justify-between w-full p-2 bg-white shadow-md h-18">
              <button
                className="p-2 my-auto text-blue-500 transition-all duration-300 bg-white border rounded-md hover:shadow-lg hover:border-slate-400 h-fit"
                onClick={(e) => {
                  e.stopPropagation(); // Impede o clique no botão de fechar a sidebar
                  toggleSidebar();
                }}
              >
                <FaBars />
              </button>
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="logo do site"
                  className="w-16 lg:w-20"
                />
              </Link>
            </div>
          )}
          <div onClick={(e) => e.stopPropagation()}>
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
