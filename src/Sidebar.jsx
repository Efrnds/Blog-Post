import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 flex flex-col h-full p-4 my-auto bg-white shadow-lg w-fit border-l-px">
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
      <Link
        to="/login"
        className="px-4 py-2 text-center text-white transition bg-black rounded-lg shadow-lg hover:bg-black/85"
      >
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;
