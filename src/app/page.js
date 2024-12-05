"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "./login/page";
import DashboardPage from "./dashboard/page";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = false; // Substitua pela lógica real de verificação de login

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return <Login />;
  }

  return <DashboardPage />;
}
