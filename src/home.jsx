import Projeto from "./Projeto";
import PropagandaVertical from "./PropagandaVertical";
import Card from "./Card";

export default function Home() {
  return (
    <div className="grid h-full grid-cols-5 gap-4 mx-4">
      <div className="flex flex-col col-span-5 gap-4 row-span-full lg:col-span-4">
        <Card id="top" className={"flex-1"}>
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
        <Card className={"flex-1 flex flex-col gap-2"}>
          <h1 className="text-lg font-semibold">Projetos</h1>
          <hr />
          <div className="flex flex-wrap flex-1 w-full gap-4 p-4 mx-auto justify-evenly">
            <Projeto title="Método SAFe" to="/metodo-safe" />
            <Projeto title="Projeto exemplo 1" to="/not-found" />
            <Projeto title="Projeto exemplo 2" to="/not-found" />
          </div>
        </Card>
      </div>
      <div className="hidden h-full lg:flex">
        <PropagandaVertical imgPath="/adVertical.jpg"/>
      </div>
    </div>
  );
}
