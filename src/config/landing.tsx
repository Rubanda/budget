import { Icons } from "@/components/icons"
import { FooterItem, LandingConfig } from "@/types"

export const landingConfig: LandingConfig = {

  mainNav: [
    {
      title: "Overview",
      href: "/",
      icon: "dashboard",
      label: "home",
      isProcted: false,
    },
    {
      title: "Budget",
      href: "/budget",
      icon: "mix",
      label: "layers",
      isProcted: false,
    },
      {
        title: "check List",
        href: "/checklist",
        icon: "user",
        label: "user",
        isProcted: false,
      },
    {
      title: "Guest List",
      href: "/guestlist",
      icon: "user",
      label: "member",
      isProcted: false,
    },
   
  ],
}
