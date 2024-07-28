"use client";
import Home from "@/components/lru/Home";
import Admin from "@/components/admin/Admin";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  return <Admin></Admin>;
}
