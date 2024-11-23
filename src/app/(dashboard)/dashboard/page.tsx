import { AppSidebar } from "@/components/app-sidebar"
import { Icons } from "@/components/icons"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"

export default function Page() {
  return (
    <div className="pt-8 pb-8 px-4 sm:px-8" >
      <h1>
        Wedding Project You Follow
      </h1>
      <div className="flex flex-col md:flex-row gap-3">

        <Card className="w-[280px] p-6 space-y-4">
          <Link href="/dashboard/event/1" >
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <Icons.plus className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Teamspace Home</h3>
              <p className="text-sm text-muted-foreground">Aug 30</p>
            </div>
          </Link>
        </Card>
        <Card className="flex items-center justify-center border-2 border-dashed w-[280px] p-6 space-y-4">
          <CardContent>
            <Icons.plus className="" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
