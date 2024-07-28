"use client"
import Image from "next/image";
import Home from "@/components/lru/Home";
import Admin from "@/components/admin/Admin";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if(!session) redirect("/signin");
  return (<main>
    {session?.user?.role === "admin" ? <Admin /> : <Home />}
  </main>)
}
