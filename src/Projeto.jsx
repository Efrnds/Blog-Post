import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Projeto({ title }) {
  return (
    <div className="flex w-40 h-40 text-center transition border rounded-lg shadow-lg hover:scale-105">
      <Link to="/metodo-safe" className="flex w-full h-full">
        <p className="m-auto h-fit">{title}</p>
      </Link>
    </div>
  );
}

Projeto.propTypes = {
  title: PropTypes.string.isRequired,
};
