import PropTypes from "prop-types";

export default function Card({ children, ...props }) {
    return (
        <div className="w-full p-4 bg-white border rounded-lg shadow-lg" {...props}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node,
};

Card.defaultProps = {
    children: null,
};
