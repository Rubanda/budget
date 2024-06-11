// sidebar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { UserNav } from "./user-nav";
import { Moon, PanelLeftOpen, PanelLeftClose, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface SidebarProps {
  className?: string;
}

const LogoSection = ({ logo }: { logo: string }) => (
  <div className="logo-container space-y-4 flex justify-center items-center py-4 md:block">
    <Link href="/">
      <div
        className="logo-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          src={logo}
          alt="Pexlle Logo"
          className="logo-image py-2"
          width={150}
          height={50}
        />
      </div>
    </Link>
  </div>
);

const UserInfoSection = ({ isCollapsed, user }: { isCollapsed: boolean, user: any}) => (
  <div className="flex justify-center items-center gap-2 py-6">
    <UserNav user={user} />
    <div
      className={`hide-when-collapsed transition-all ${
        isCollapsed ? "hidden" : ""
      }`}
    >
      <p className="text-sm font-medium leading-none">{user?.name}</p>
      <p className="text-xs leading-none text-muted-foreground">
        {user?.email}
      </p>
    </div>
  </div>
);

const NavigationSection = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <div className="px-3 py-2">
    <Separator className="mb-4" />
    <DashboardNav items={navItems} isCollapsed={isCollapsed} />
  </div>
);

const FooterSection = ({
  theme,
  setTheme,
  isCollapsed,
  toggleCollapse,
}: {
  theme: string;
  setTheme: Function;
  isCollapsed: boolean;
  toggleCollapse: Function;
}) => (
  <footer className="absolute bottom-0 pl-[1.85rem] pr-[1.75rem] py-6">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className=""
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Moon
              className="text-muted-foreground h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              strokeWidth={1.3}
            />
            <Sun
              className="text-muted-foreground absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              strokeWidth={1.3}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Light/Dark</TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={(event) => toggleCollapse()}
            className="p-2"
            variant="ghost"
          >
            {isCollapsed ? (
              <PanelLeftOpen
                className="text-muted-foreground h-[1.2rem] w-[1.2rem]"
                strokeWidth={1.3}
              />
            ) : (
              <PanelLeftClose
                className="text-muted-foreground h-[1.2rem] w-[1.2rem]"
                strokeWidth={1.3}
              />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Toggle sidebar</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </footer>
);

export default function Sidebar({ className }: SidebarProps) {
  const {data: session} = useSession();
  console.log(session)
  const { theme = "light", setTheme } = useTheme(); // Default to 'light' if theme is undefined
  const [logo, setLogo] = useState("/iot-logo.svg");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const savedCollapseState = localStorage.getItem("sidebarCollapsed");
    setIsCollapsed(savedCollapseState === "true");
  }, []);

  const toggleCollapse = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarCollapsed", String(newCollapsedState));
    }
  };

  useEffect(() => {
    const effectiveTheme = theme === "system" ? "light" : theme;
    setLogo(effectiveTheme === "light" ? "/iot-logo.svg" : "/iot-logo.svg");
  }, [theme]);

  return (
    <div
      className={`p-4 sidebar flex flex-col h-full ${className} ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <div className="flex h-full border-r rounded-3xl bg-muted flex-col flex-grow overflow-auto">
        <LogoSection logo={logo} />
        <UserInfoSection isCollapsed={isCollapsed} user={session?.user}/>
        <NavigationSection isCollapsed={isCollapsed} />
        <div className=" flex items-center gap-2 py-6 justify-center align-center bottom-0">
          <FooterSection
            theme={theme}
            setTheme={setTheme}
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
          />
        </div>
      </div>
    </div>
  );
}