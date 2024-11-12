import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';

export default function DashHeader() {
  return (
    <div className="supports-backdrop-blur:bg-background/60  bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
       <div className='text-xl text-orange-400' >WP</div>
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}