import * as React from "react";
import { siteConfig } from "@/config/site";

export function SiteFooter({ className, orgId }: { className?: string; orgId?: string }) {
    return (
        <footer className="">
            <div className="container flex flex-col items-center justify-between gap-4  md:h-4 md:flex-row md:py-0">

                <p className="text-center text-sm leading-loose md:text-left">

                </p>
                <p className="text-center text-sm leading-loose md:text-left">
                    Masata
                </p>
                <p className="text-center text-muted-foreground text-sm leading-loose md:text-left">
                    Org {orgId?.split('-')[0]}
                </p>
            </div>
        </footer>
    );
}