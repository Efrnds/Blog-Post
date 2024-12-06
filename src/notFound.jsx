import Card from "./Card";
import { RedButton } from "lib-texsa";
export default function NotFound() {
  return (
    <div className="flex w-full h-full">
      <Card
        className={
          "w-5/6 h-1/2 flex flex-col gap-2 m-auto border-4 border-red-500 "
        }
      >
        <div className="flex flex-col h-full gap-4 my-auto">
          <h1 className="mt-auto text-6xl text-center text-red-600">
            ERRO 404
          </h1>

          <p className="text-3xl text-center">Página não encontrada!</p>
          <p className="text-3xl text-center ">
            Volte para a página anterior ou tente novamente mais tarde
          </p>
          <RedButton
            customStyles="w-fit font-bold text-3xl mx-auto mb-auto"
            text="VOLTAR"
            onClick={() => window.history.back()}
          />
        </div>
      </Card>
    </div>
  );
}
