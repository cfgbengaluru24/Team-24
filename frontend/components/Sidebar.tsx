"use client";

import { useState } from "react";
import {
  Home,
  Github,
  LandPlot,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
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
            title: "about",
            icon: Github,
            variant: "default",
            href: "https://github.com/ankush-003",
          },
        ]}
      />
    </div>
  );
}
