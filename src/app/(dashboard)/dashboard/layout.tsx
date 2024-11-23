import DashHeader from '@/components/layout/dash-header';
import DashboardLayout from '@/components/layout/dash-layout';
import { SiteFooter } from '@/components/layout/site-footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function DashboardsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout >
    {children}
    </DashboardLayout>
  );
}