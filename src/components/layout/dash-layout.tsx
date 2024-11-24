import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import DashHeader from "./dash-header";
import { SiteFooter } from "./site-footer";
interface Dashboard{
    children: React.ReactNode;
}
export default function DashboardLayout({children}: Dashboard) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16  shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            
          </div>
          <DashHeader />

        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {children}
        <SiteFooter />
        </div>
      </SidebarInset>
      
    </SidebarProvider>
  )
}
