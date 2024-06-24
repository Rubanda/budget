"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import {  buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";
import { UserAccountNav } from "./use-account-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { MobileSidebar } from "./mobile-sidebar";
interface siteHeaderProps {
  session?: any
  className?: string
}
interface RouteProps {
  href: string;
  label: string;
}
interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#testimonials",
    label: "Testimonials",
  },
  {
    href: "/#team",
    label: "Team",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href:"/wedding",
    label:"Wedding"
  },
];
const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];
export default function Header({ session, className }: siteHeaderProps) {
  const pathname = usePathname();


  return (
    <div className="fixed xl:px-9 sm:px-0 top-0 left-0 right-0 supports-backdrop-blur:bg-background/50 border-b border-muted/20 bg-background/20 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className={cn("block sm:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="">
          {/* Use the logo state for rendering */}
          <Link href="/">
            {/* <Image src={logo} alt="Pexlle Logo" width={150} height={50} />{" "} */}
            {/* Adjust width and height as needed */}
            <p className="font-semibold text-xl">Wedding Planner</p>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
        <div className="flex items-center gap-3 justify-center md:flex">
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