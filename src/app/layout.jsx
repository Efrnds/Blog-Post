"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function RootLayout({ children }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está logado no localStorage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    // Se não estiver logado, redireciona para a página de login
    if (!loggedIn) {
      router.push("/login");
    }
  }, [router]);

  // Enquanto a verificação de login está em andamento, retorna null para evitar exibir conteúdo indesejado
  if (isLoggedIn === null) {
    return <p>Carregando...</p>; // Você pode exibir um "Carregando..." ou algo mais amigável
  }

  return (
    <div className="flex flex-col h-screen bg-slate-300 font-Urbanist-Regular">
      <SidebarProvider>
        {isLoggedIn && (
          <>
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 flex items-center h-16 gap-2 px-4 bg-white border-b shrink-0 dark:bg-neutral-950">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-4 mr-2" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>home</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
            </SidebarInset>
          </>
        )}
      </SidebarProvider>
      {children}
      {/* Footer */}
    </div>
  );
}
