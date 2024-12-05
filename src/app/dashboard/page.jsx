"use client";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import ComponenteCard from "@/components/componenteCard";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col gap-4 p-4 m-4">
        <ComponenteCard
          href={"#title"}
          title={"Método Ágil SAFe"}
          className={"text-2xl"}
          description={
            <div className="flex flex-col gap-4">
              <p>
                Este blog foi criado com o intuito de explicar o que é o método
                ágil SAFe, e como ele pode ser utilizado em empresas de pequeno
                e grande porte, sinta-se a vontade para nos dar uma estrelinha
                no repositório{" "}
                <Link
                  className="font-semibold text-blue-500"
                  href="https://github.com/Efrnds/blogpost"
                >
                  aqui
                </Link>{" "}
                e compartilhar com seus amigos.
              </p>
              <div>
                <h1 className="text-xl">Postagens</h1>
                <Link href="../SAFe" className="flex w-32 h-32 p-2 border rounded-md shadow-md">
                  <p className="w-full my-auto text-center fot-bold">
                    Postagem 1
                  </p>
                </Link>
              </div>
            </div>
          }
        />
        <ComponenteCard
          title={"Sobre ou quem somos"}
          description={
            <>
              <p>
                Resumo do que trata o blog <br></br>
                asdfadgjf
              </p>
            </>
          }
        />
        <ComponenteCard
          title={"Publicações"}
          description={
            "Organizadas no centro do blog, de forma cronológica inversa, com os textos mais recentes em destaque"
          }
        />
        <ComponenteCard
          title={"Horários e datas"}
          description={"Acompanham as publicações"}
        />
        <ComponenteCard
          title={"Assinaturas"}
          description={
            "Quando o blog tem mais de um escritor, os posts podem ter assinaturas"
          }
        />
        <ComponenteCard
          title={"Perfil do autor"}
          description={"Geralmente aparece nas laterais do blog"}
        />
        <ComponenteCard
          title={"Contatos"}
          description={"Geralmente aparece nas laterais do blog"}
        />
        <ComponenteCard
          title={"Comentários"}
          description={
            "Uma ferramenta que permite aos leitores comentarem as postagens"
          }
        />
        <ComponenteCard
          title={"TITULO"}
          description={
            "O que é a metodologia agil SAFe? O metodo Scaled Agile Framework (SAFe) é uma metodo agil para adicionar boas praticas ageis em empresas, e projetos sendo eles de pequena ou grande escala, esse framework ajuda a incorporar processos à medida que o projeto cresce, obtendo alta escalabilidade. SAFe foi lançado em 2011 por Dean Leffingwell e Drew Jemilo. Nesse tempo era comum ser utilizado metodos mais tradicionais, e a medida que mercado mudava, era necessario novas ferramentas e frameworks para ajudar as empresas a resolver novos problemas, dessa forma Leffingwell e Jemilo criaram o modelo SAFe. Essa metodologia facilitou muito organizações a desenvolverem novos produtos e sistemas que atendessem mais facilmente as necessidade dos clientes, implementando o framework SAfe para definir funções, identificar dependencias, e dar estrutura ao seu fluxo de trabalho e impulsionar as praticas ageis."
          }
        />
      </div>
    </div>
  );
}
