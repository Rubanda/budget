"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import React from "react"
import { Icons } from "./icons"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"

export function NavMain({
  items,
}: {
  items: NavItem[],
}) {
  const path = usePathname();
  const { setOpenMobile, isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          console.log([item?.href])
          const Icon = Icons[item?.icon! || "arrowRight"];
          const isHome = item.href === `/` && path === `/dashboard`;
          const itemPath = `/dashboard${item?.href!}`;
          const isActive = path === itemPath || (item.href !== '/' && path.startsWith(itemPath));

          console.log([path, itemPath])
          return (

            <React.Fragment key={item.title}>
              <SidebarMenuItem>
                <Link href={itemPath} >
                  <SidebarMenuButton onClick={() => setOpenMobile(false)} className={isHome || isActive
                    ? "justify-start rounded-md bg-primary/40 dark:bg-muted font-medium  shadow hover:bg-primary/90 dark:hover:bg-background/80"
                    : "transparent text-sidebar-foreground/70 "}>
                    {/* <Icons.bell className="text-sidebar-foreground/70" /> */}
                      {item.icon && <Icon />}

                      <span >{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
             
            </React.Fragment>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

