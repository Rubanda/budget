import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useEffect } from "react";
import { getCurrentUser } from '@/lib/session';
dayjs.extend(customParseFormat);
interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
import * as z from "zod";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const weddings = [
  {
    id: 1,
    title: "Mugisha's Wedding",
    date: "2023-12-12",
    description: "Mugisha's wedding is going to be the best wedding of the year",

  },
  {
    id: 2,
    title: "Major's Wedding",
    date: "2024-06-22",
    desription: "Major's wedding is going to be the best wedding of the year",

  }
]

const searchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().default("10"),
});
export default async function Page({ searchParams }: Props) {
  const session = await getCurrentUser()
  console.log(session)
  // Column and order to sort by
  // if (!session) return (
  //   <Shell>
  //     <div className="flex items-center justify-center w-full h-full">
  //       <div className="flex flex-col items-center space-y-4">
  //         <h1 className="text-3xl font-semibold">You are not logged in</h1>
  //         <span className="text-muted-foreground">
  //           Login in to view you the logs.
  //         </span>
  //       </div>
  //     </div>
  //   </Shell>
  // )

  return (

    <div className="mx-auto max-w-6xl py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weddings.map((wedding) => (
          <Card key={wedding.id} className="p-4">
            <Link href={`/wedding/${wedding.id}`}>
              <h1>
                {wedding.title}
              </h1>
            </Link>
          </Card>
        ))}
      </div>
      {/* <h1>Hi</h1>
        <p>
          {`We're more than just a tool, we're a community of passionate
          creators. Get access to exclusive resources, tutorials, and support.`}
        </p> */}

    </div>
  )
}
