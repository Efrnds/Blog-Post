import PropTypes from "prop-types";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={`w-full p-4 bg-white border rounded-lg shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
};
