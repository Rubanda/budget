import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

type BreadCrumbType = {
  title: string;
  link: string;
};

type BreadCrumbPropsType = {
  items?: BreadCrumbType[];
  children?: React.ReactNode;
};

export  function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <div className=" flex items-center  text-sm text-muted-foreground ">
      <div className="flex items-center gap-2">
        <Icons.dashboard className="h-4 w-4" />
        <Link
          href={"/dashboard"}
          className="overflow-hidden text-ellipsis whitespace-nowrap"
        >
          Dashboard
        </Link>
        {items?.map((item: BreadCrumbType, index: number) => (
          <React.Fragment key={item.title}>
            <ChevronRightIcon className="h-4 w-4" />
            <Link
              href={item.link}
              className={cn(
                "font-medium",
                index === items.length - 1
                  ? "pointer-events-none text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export function Nav({items, children}: BreadCrumbPropsType) {

  return (
    <header className="sticky z-10 top-0 flex shrink-0 items-center  justify-between gap-2 border-b bg-background p-4">
      <div className="flex items-center gap-2  ">
        {/* <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" /> */}
        <BreadCrumb items={items} />
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </header>
  )
}