import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Projeto({ title, to }) {
  return (
    <div className="flex flex-1 text-center transition border rounded-lg shadow-lg hover:scale-105">
      <Link to={to} className="flex w-full h-full">
        <p className="m-auto h-fit">{title}</p>
      </Link>
    </div>
  );
}

Projeto.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
