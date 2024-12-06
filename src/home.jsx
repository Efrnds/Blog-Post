import Projeto from "./Projeto";
export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full p-4 bg-white border rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold">
          Bem vindos ao AGILE
        </h1>
        <hr />
        <div className="mt-4">
          <p>
            Este blog é dedicado a compartilhar conhecimentos e experiências
            sobre métodos ágeis, como Scrum, Kanban, Lean, entre outros. Aqui
            você encontrará artigos, tutoriais e dicas práticas para aplicar
            esses métodos em seus projetos e obter resultados mais eficientes e
            colaborativos. Acompanhe nossas postagens e junte-se à comunidade
            ágil!
          </p>
        </div>
      </div>
      <div className="w-full p-4 bg-white border rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold">Projetos</h1>
        <hr />
        <div className="mt-4">
          <Projeto title="Método SAFe" />
        </div>
      </div>
    </div>
  );
}
