import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./home";
import Sidebar from "./Sidebar";
import Safe from "./Safe";
import { FaBars } from "react-icons/fa";
import NotFound from "./notFound";
import axios from "axios";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  const [lastUpdated, setLastUpdated] = useState("Loading...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchLastUpdated = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/Efrnds/blogpost/commits"
        );
        const latestCommit = response.data[0];
        const commitDate = new Date(latestCommit.commit.author.date);
        setLastUpdated(
          commitDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        );
      } catch (error) {
        console.error("Erro ao buscar o último commit:", error);
        setLastUpdated("Erro ao buscar data");
      }
    };

    fetchLastUpdated();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative flex h-screen">
        <Routes>
          <Route path="/not-found" element={<NotFound />} />
          <Route
            path="*"
            element={
              <>
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                <div className="flex flex-col w-screen h-screen gap-4">
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
                      <Link
                        to="/"
                        className="transition hover:drop-shadow-lg shadow-slate-500"
                      >
                        <img
                          src="/logo.png"
                          alt="logo do site"
                          className="w-16 lg:w-20"
                        />
                      </Link>
                    </div>
                  )}
                  <main
                    className={`flex flex-1 flex-col transition-all duration-300 ease-in-out  ${
                      isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
                    }`}
                    onClick={closeSidebar} // Fecha a sidebar ao clicar no main
                  >
                    <div className="h-full" onClick={(e) => e.stopPropagation()}>
                      <Routes>
                        <Route
                          path="/"
                          element={
                            isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />
                          }
                        />
                        <Route
                          path="/metodo-safe"
                          element={
                            isLogin ? <Safe /> : <Login setIsLogin={setIsLogin} />
                          }
                        />
                        <Route
                          path="/login"
                          element={<Login setIsLogin={setIsLogin} />}
                        />
                      </Routes>
                    </div>
                  </main>
                  {isLogin && (
                    <footer className="flex flex-col w-full gap-2 p-4 text-center transition bg-white border shadow-lg">
                      <div className="flex justify-between w-full">
                        <p className="text-sm text-slate-600">AGILE ©2024 </p>
                        <p className="text-sm text-slate-600">
                          TODOS OS DIREITOS RESERVADOS
                        </p>
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="text-left">
                          <p className="text-sm font-semibold">HORA LOCAL</p>
                          <p className="text-xs">{time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">ULTIMO UPDATE</p>
                          <p className="text-xs">{lastUpdated}</p>
                        </div>
                      </div>
                      <div className="mx-auto text-sm">
                        <p>
                          desenvolvido por{" "}
                          <a
                            href="www.github.com/cauadsm"
                            className="text-blue-500 transition hover:drop-shadow-sm hover:text-blue-700"
                          >
                            @cauadsm
                          </a>{" "}
                          e{" "}
                          <a
                            href="www.github.com/efrnds"
                            className="text-blue-500 transition hover:drop-shadow-sm hover:text-blue-700"
                          >
                            @efrnds
                          </a>
                        </p>
                      </div>
                    </footer>
                  )}
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
