import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botão de abrir/fechar da sidebar */}
      <button
        className={`absolute z-50 p-1.5 text-blue-500 transition-all duration-300 bg-white border rounded-md shadow-md top-2 left-4 ${
          isOpen ? "left-[88%]" : "left-2"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 flex flex-col h-full p-4 my-auto bg-white shadow-lg w-fit border-l-px transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <h2 className="mb-4 text-xl font-bold">Menu</h2>
        <div className="flex-1">
          <div className="flex flex-col gap-2 text-sm text-sky-700">
            <Link
              to="/"
              className="transition hover:text-sky-500 hover:drop-shadow-sm"
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="transition hover:text-sky-500 hover:drop-shadow-sm"
            >
              Sobre
            </Link>
            <Link
              to="/metodo-safe"
              className="transition hover:text-sky-500 hover:drop-shadow-sm"
            >
              Metodo-safe
            </Link>
            <Link
              to="/contato"
              className="transition hover:text-sky-500 hover:drop-shadow-sm"
            >
              Contato
            </Link>
          </div>
        </div>
        <a
          href="/login"
          className="px-4 py-2 text-center text-white transition bg-black rounded-lg shadow-lg hover:bg-black/85"
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
