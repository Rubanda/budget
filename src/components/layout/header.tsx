"use client";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MainSidebar } from "./main-sidebar";
import { UserAccountNav } from "./use-account-nav";
interface siteHeaderProps {
  session?: any
  className?: string
}
export default function Header({ session, className }: siteHeaderProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [logo, setLogo] = React.useState("/iot-logo.svg"); // Initialize logo state with dark logo

  React.useEffect(() => {
    // Assuming the 'system' theme aligns with light mode
    const effectiveTheme = theme === "system" ? "light" : theme;

    if (effectiveTheme === "light") {
      setLogo("/iot-logo.svg"); // Path for the light theme logo
    } else {
      setLogo("/iot-logo.svg"); // Path for the dark theme logo
    }
  }, [theme]);

  return (
    <div className="fixed xl:px-9 sm:px-0 top-0 left-0 right-0 supports-backdrop-blur:bg-background/50 border-b border-muted/20 bg-background/20 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className={cn("block sm:!hidden")}>
          <MainSidebar />
        </div>
        <div className="">
          {/* Use the logo state for rendering */}
          <Link href="/">
            {/* <Image src={logo} alt="Pexlle Logo" width={150} height={50} />{" "} */}
            {/* Adjust width and height as needed */}
            <p className="font-semibold text-xl">Wedding Planner</p>
          </Link>
        </div>

        <div className="hidden sm:block flex justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dash"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/dash"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Dashboard
            </Link>
      
            <Link
              href={"#"}
              className={cn(
                "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
              )}
            >
              GitHub
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-center hidden md:flex">

          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center w-9 h-9">
              <Icons.google className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>

          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex items-center justify-center w-9 h-9"
                >
                  <Sun
                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    onClick={() => setTheme("dark")}
                    strokeWidth={1}
                  />
                  <Moon
                    className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    onClick={() => setTheme("light")}
                    strokeWidth={1}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Light/Dark</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <nav className="flex gap-2">
            {session ? <UserAccountNav user={session} /> : <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "px-4 disabled"
              )}

            >
              Login
            </Link>}
          </nav>
        </div>
      </nav>
    </div>
  );
}