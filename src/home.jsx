import Projeto from "./Projeto";
import PropagandaHorizontal from "./PropagandaHorizontal";
import PropagandaVertical from "./PropagandaVertical";
import Card from "./Card";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      <div className="flex flex-col col-span-3 gap-4 md:col-span-2">
        <Card id="top">
          <h1 className="text-lg font-semibold">Bem vindos ao AGILE</h1>
          <hr />
          <div className="mt-4">
            <p>
              Este blog é dedicado a compartilhar conhecimentos e experiências
              sobre métodos ágeis, como Scrum, Kanban, Lean, entre outros. Aqui
              você encontrará artigos, tutoriais e dicas práticas para aplicar
              esses métodos em seus projetos e obter resultados mais eficientes
              e colaborativos. Acompanhe nossas postagens e junte-se à
              comunidade ágil!
            </p>
          </div>
        </Card>
        <Card>
          <h1 className="text-lg font-semibold">Projetos</h1>
          <hr />
          <div className="mt-4">
            <Projeto title="Método SAFe" />
          </div>
        </Card>
        <Card>
          <PropagandaHorizontal />
        </Card>
      </div>
      <div className="hidden h-full md:flex">
        <PropagandaVertical />
      </div>
    </div>
  );
}
