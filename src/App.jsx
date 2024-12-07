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
                    <div
                      className="h-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Routes>
                        <Route
                          path="/"
                          element={
                            isLogin ? (
                              <Home />
                            ) : (
                              <Login setIsLogin={setIsLogin} />
                            )
                          }
                        />
                        <Route
                          path="/metodo-safe"
                          element={
                            isLogin ? (
                              <Safe />
                            ) : (
                              <Login setIsLogin={setIsLogin} />
                            )
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
                    <footer className="bg-gray-800 text-white py-6">
                      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
                        {/* Espécie de espaçador vazio, caso seja necessário algum outro conteúdo */}
                        <div className="w-full sm:w-auto"></div>

                        <div className="text-xs sm:text-sm text-center sm:text-left mt-4 sm:mt-0">
                          <p>AGILE ©2024 | TODOS OS DIREITOS RESERVADOS</p>
                        </div>

                        {/* Espaço vazio à direita, caso necessário */}
                        <div className="w-full sm:w-auto"></div>

                        <div className="text-xs sm:text-sm text-center sm:text-right mt-4 sm:mt-0">
                          <p>
                            Projeto desenvolvido por:{" "}
                            <a
                              href="https://www.github.com/cauadsm"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              @cauadsm
                            </a>{" "}
                            e{" "}
                            <a
                              href="https://www.github.com/efrnds"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-600"
                            >
                              @efrnds
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Bloco com horário local e último update */}
                      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between sm:justify-end text-xs sm:text-sm text-center sm:text-right mt-4">
                        <div className="mr-0 sm:mr-6 mb-4 sm:mb-0">
                          <p className="font-semibold">HORA LOCAL</p>
                          <p>{time}</p>
                        </div>
                        <div>
                          <p className="font-semibold">ÚLTIMO UPDATE</p>
                          <p>
                            {new Date(lastUpdated).toLocaleDateString("pt-BR")}
                          </p>{" "}
                          {/* Formatação da data para DD/MM/AAAA */}
                        </div>
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
