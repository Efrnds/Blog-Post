"use client";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const page = pathname.query;

  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname !== "/login" ? (
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 flex items-center h-16 gap-2 px-4 bg-white border-b shrink-0 dark:bg-neutral-950">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-4 mr-2" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{page || "Home"}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <VisuallyHidden>
                <div>Conteúdo</div>
              </VisuallyHidden>
              {children}
            </SidebarInset>
          </SidebarProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
