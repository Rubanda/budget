import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/nav/site-head";
import { Footer } from "@/components/nav/footer";
import { getCurrentUser } from "@/lib/session";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function homeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getCurrentUser()
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader className="mx-auto max-w-6xl"
       session={session}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div >
  );
}