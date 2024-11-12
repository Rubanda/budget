'use client';
import * as React from "react";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
export function SiteFooter({ className, orgId }: { className?: string; orgId?: string }) {
    const { theme, setTheme } = useTheme();
    const [logo, setLogo] = React.useState("/iot-logo.svg"); // Initialize logo state with dark logo

    React.useEffect(() => {
        // Assuming the 'system' theme aligns with light mode
        const effectiveTheme = theme === "system" ? "light" : theme;

        if (effectiveTheme === "light") {
            setLogo("/iot-logo.svg"); // Path for the light theme logo
        } else {
            setLogo("/iot-logo.svg"); 
        }
    }, [theme]);
    return (
        <footer className="">
            <div className="container flex   items-center justify-between gap-4  md:h-4 md:py-0">
                <p className="text-center text-sm leading-loose md:text-left">
                   Rweru 
                </p>
                <TooltipProvider delayDuration={100} >          <Tooltip>
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
            </div>
        </footer>
    );
}