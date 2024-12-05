
"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const page = router.query;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>