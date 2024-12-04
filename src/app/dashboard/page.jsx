import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ComponenteCard from "@/components/componenteCard";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex items-center h-16 gap-2 px-4 bg-white border-b shrink-0 dark:bg-neutral-950">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4 mr-2" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#title">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-col gap-4 p-4 m-4">
          <ComponenteCard
            id="title"
            href={"#title"}
            title={"Título"}
            description={
              "Pode ser objetivo, fazendo referência ao assunto, ou subjetivo"
            }
          />
          <ComponenteCard
            id={"#about"}
            title={"Sobre ou quem somos"}
            description={"Resumo do que trata o blog"}
          />
          <ComponenteCard
            id={"#publications"}
            title={"Publicações"}
            description={
              "Organizadas no centro do blog, de forma cronológica inversa, com                 os textos mais recentes em destaque"
            }
          />
          <ComponenteCard
            id={"#dates"}
            title={"Horários e datas"}
            description={"Acompanham as publicações"}
          />
          <ComponenteCard
            id={"#signatures"}
            title={"Assinaturas"}
            description={
              "Quando o blog tem mais de um escritor, os posts podem ter assinaturas"
            }
          />
          <ComponenteCard
            id={"#author"}
            title={"Perfil do autor"}
            description={"Geralmente aparece nas laterais do blog"}
          />
          <ComponenteCard
          id={"#contacts"}
            title={"Contatos"}
            description={"Geralmente aparece nas laterais do blog"}
          />
          <ComponenteCard
            id={"#comments"}
            title={"Comentários"}
            description={
              "Uma ferramenta que permite aos leitores comentarem as postagens"
            }
          />
          <ComponenteCard
            id={"#archives"}
            title={"TITULO"}
            description={
              "O que é a metodologia agil SAFe? O metodo Scaled Agile Framework (SAFe) é uma metodo agil para adicionar boas praticas ageis em empresas, e projetos sendo eles de pequena ou grande escala, esse framework ajuda a incorporar processos à medida que o projeto cresce, obtendo alta escalabilidade. SAFe foi lançado em 2011 por Dean Leffingwell e Drew Jemilo. Nesse tempo era comum ser utilizado metodos mais tradicionais, e a medida que mercado mudava, era necessario novas ferramentas e frameworks para ajudar as empresas a resolver novos problemas, dessa forma Leffingwell e Jemilo criaram o modelo SAFe. Essa metodologia facilitou muito organizações a desenvolverem novos produtos e sistemas que atendessem mais facilmente as necessidade dos clientes, implementando o framework SAfe para definir funções, identificar dependencias, e dar estrutura ao seu fluxo de trabalho e impulsionar as praticas ageis."
            }
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
