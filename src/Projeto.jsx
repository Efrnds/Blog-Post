import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Projeto({ title }) {
  return (
    <Link to="/metodo-safe">
      <div className="flex w-40 h-40 text-center transition border rounded-lg shadow-lg hover:scale-105">
        <p className="m-auto h-fit">{title}</p>
      </div>
    </Link>
  );
}

Projeto.propTypes = {
  title: PropTypes.string.isRequired,
};
