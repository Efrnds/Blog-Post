"use client"
import * as React from "react";
import { SearchForm } from "@/components/search-form";
import Profile from "@/components/Profile";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Método Ágil SAFe",
      url: "/dashboard",
    },
    {
      title: "morra IA",
      url: "/posts/post1",
    }
  ],
};

export function AppSidebar({ ...props }) {
  const handleLinkClick = () => {
    // Lógica para fechar o sidebar
    document.querySelector('.sidebar').classList.add('hidden');
  };

  return (
    <Sidebar {...props} className="sidebar">
      <SidebarHeader>
        <VisuallyHidden>
          <h2>Menu</h2>
        </VisuallyHidden>
        <Profile />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link href={item.url} onClick={handleLinkClick}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button>
          <Link href="./login" onClick={handleLinkClick}>Logout</Link>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
