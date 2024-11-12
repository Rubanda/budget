import { Icons } from "@/components/icons";
// import type { Icon } from "lucide-react"

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  count?: number; // for showing numbers
  tag?: string; // for showing tags like 'new'
  isProcted?: boolean,
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}
export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export type Option = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
};

export interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}

export interface DataTableFilterField<TData> {
  label: string
  value: keyof TData
  placeholder?: string
  options?: Option[]
}

export interface DataTableFilterOption<TData> {
  id: string
  label: string
  value: keyof TData
  options: Option[]
  filterValues?: string[]
  filterOperator?: string
  isMulti?: boolean
}
export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
} 
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}
export type MainNavItem = NavItemWithOptionalChildren


export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    linkedIn: string
    instagram: string
    youtube: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
}

export type LandingConfig = {
  mainNav: MainNavItem[]
  // footerNav: footerNav[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}