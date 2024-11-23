import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';

export default function DashHeader() {
  return (
      <nav className="flex items-center  justify-center ">
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
  );
}