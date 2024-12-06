import PropTypes from "prop-types";
export default function PropagandaVertical({ imgPath }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-auto overflow-hidden bg-red-100 border-none rounded-md lg:h-full">
      <img src={imgPath} alt="" className="object-cover w-full h-full" />
    </div>
  );
}

PropagandaVertical.propTypes = {
  imgPath: PropTypes.string.isRequired,
};
