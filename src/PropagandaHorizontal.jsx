export default function PropagandaHorizontal() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-64 overflow-hidden bg-gray-100 rounded-md lg:h-[500px]">
      <img
        src="adHorizontal.jpg"
        alt="Oferta Especial"
        className="object-cover w-full h-full rounded-md"
      />
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
