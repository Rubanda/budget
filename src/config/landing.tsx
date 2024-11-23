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
      title: "Event",
      href: "/event",
      icon: "user",
      label: "user",
      isProcted: false,
    },
    {
      title: "Members",
      href: "/members",
      icon: "user",
      label: "user",
      isProcted: false,
    },

    {
      title: "Settings",
      href: "/settings",
      icon: "settings",
      label: "member",
      isProcted: false,
    },

  ],
}
