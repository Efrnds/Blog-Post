import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Sidebar */}
      <div
        className={`absolute top-0 bottom-0 left-0 z-50 flex flex-col h-full p-4 bg-white shadow-lg w-64 transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen
            ? "translate-x-0 md:translate-x-0"
            : "-translate-x-64 md:-translate-x-64"
        }`}
        onClick={(e) => e.stopPropagation()} // Impede o clique dentro da sidebar de fechar a mesma
      >
        <div className="flex justify-between ">
          <h2 className="my-auto text-xl font-bold">Menu</h2>
          <img src="/logo.png" alt="logo do site" className="w-16 lg:w-20" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-2 text-sm text-sky-700">
            <Link
              to="/"
              className="transition hover:text-sky-500 hover:drop-shadow-sm"
            >
              Home
            </Link>
            <Link
              to="/not-found"
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
              to="/not-found"
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

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
