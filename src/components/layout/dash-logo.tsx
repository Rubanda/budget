"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes";
import Image from "next/image"
import { Icons } from "../icons"
import { Skeleton } from "../ui/skeleton"
import { siteConfig } from "@/config/site"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"

interface MainNavProps {
  organisation?: any
}

export function MainLogo({ organisation }: MainNavProps) {
  const { theme = "light" } = useTheme(); // Default to 'light' if theme is undefined
  const [logo, setLogo] = React.useState("/logo/masata-b.png");
  React.useEffect(() => {
    const effectiveTheme = theme === "system" ? "light" : theme;
    setLogo(
      effectiveTheme === "light"
        ? "/logo/masata-b.png"
        : "/logo/masata-w.png"
    );
  }, [theme]);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size='lg'
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground ">
            <Link href="/dashboard"  arial-label="main logo" scroll={false}>
            <Image src={logo} alt="logo" width={50} height={50} />
            </Link>
          </div> */}
          <Link href="/dashboard" className="flex items-center space-x-2 " arial-label="organisation name" scroll={false}>

            <div className="flex items-center space-x-2">
              {organisation?.logoLight ? <Image src={organisation?.logoLight} alt="logo" width={28} height={28} /> :   <div className='text-xl text-orange-400' >WP</div>}
              <span className="text-sm font-semibold">{organisation?.name ?? siteConfig.name}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
