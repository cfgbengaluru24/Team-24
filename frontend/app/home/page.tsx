"use client"
import Image from "next/image";
import Home from "@/components/lru/Home";
import Admin from "@/components/admin/Admin";

export default function Page() {
  // return <Admin></Admin>;
  return (
    <main>
      <Home />
      <Admin />
    </main>
  );
}
