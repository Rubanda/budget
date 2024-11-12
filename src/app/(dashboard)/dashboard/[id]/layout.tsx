import DashHeader from '@/components/layout/dash-header';
import DashboardLayout from '@/components/layout/dash-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default function EventLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout eventId={'1'} >
          {children}
        </DashboardLayout>
  );
}