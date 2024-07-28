"use client";

import { useState } from "react";
import {
  Home,
  Github,
  LandPlot,
  ChevronRight,
  ChevronLeft,
  FlaskConical,
  Grid2x2Check,
} from "lucide-react";

import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const links = {
  admin: [
    {
      title: "dashboard",
      icon: Home,
      variant: "default",
      href: "/home",
    },
    {
      title: "Lands",
      icon: LandPlot,
      variant: "default",
      href: "/lands",
    },
    {
      title: "about",
      icon: Github,
      variant: "default",
      href: "https://github.com/cfgbengaluru24/Team-24",
    },
  ],
  lru: [
    {
      title: "dashboard",
      icon: Home,
      variant: "default",
      href: "/home",
    },
    {
      title: "Lands",
      icon: LandPlot,
      variant: "default",
      href: "/lands",
    },
    {
      title: "Logs",
      icon: Grid2x2Check,
      variant: "default",
      href: "/logs",
    },
    {
      title: "identify",
      icon: FlaskConical,
      variant: "default",
      href: "/identify",
    },
    {
      title: "about",
      icon: Github,
      variant: "default",
      href: "https://github.com/cfgbengaluru24/Team-24",
    },
  ],
};

export default function Sidebar({ session }: { session: any }) {
  console.log(session);
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24 bg-background text-foreground">
      <div className="absolute right-[-20px] top-8">
        <Button
          variant={"secondary"}
          className="rounded-full p-2 hover:border-2 max-md:hidden dark:hover:border-white hover:border-black">
          {isCollapsed ? (
            <ChevronRight
              className="h-6 w-6"
              onClick={() => setIsCollapsed(false)}
            />
          ) : (
            <ChevronLeft
              className="h-6 w-6"
              onClick={() => setIsCollapsed(true)}
            />
          )}
        </Button>
      </div>
      {session ? (
        <Nav isCollapsed={isCollapsed} links={links[session?.user.role]} />
      ) : (
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "dashboard",
              icon: Home,
              variant: "default",
              href: "/home",
            },
            {
              title: "Lands",
              icon: LandPlot,
              variant: "default",
              href: "/lands",
            },
            {
              title: "identify",
              icon: FlaskConical,
              variant: "default",
              href: "/identify",
            },
            {
              title: "Logs",
              icon: Grid2x2Check,
              variant: "default",
              href: "/logs",
            },
            {
              title: "about",
              icon: Github,
              variant: "default",
              href: "https://github.com/cfgbengaluru24/Team-24",
            },
          ]}
        />
      )}
    </div>
  );
}
