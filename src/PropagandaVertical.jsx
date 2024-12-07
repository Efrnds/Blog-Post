import PropTypes from "prop-types";

export default function PropagandaVertical({ imgPath }) {
  return (
    <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
      <img className="w-full h-auto object-cover" src={imgPath} alt="Oferta Especial" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 flex flex-col justify-center items-center p-6 animate-pulse">
        <h2 className="text-white text-2xl font-bold mb-4">Oferta Exclusiva!</h2>
        <p className="text-white mb-4">Não perca esta oportunidade única! Descubra mais.</p>
        <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300">
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

PropagandaVertical.propTypes = {
  imgPath: PropTypes.string.isRequired,
};
