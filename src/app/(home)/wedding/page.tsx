import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useEffect } from "react";
import { Shell } from "@/components/shell/shell";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/shell/page-header";
import { getCurrentUser } from '@/lib/session';
dayjs.extend(customParseFormat);
interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
import * as z from "zod";

const searchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().default("10"),
});
export default async function Page({ searchParams }: Props) {
  const session = await getCurrentUser()
  const { page, per_page } =
    searchParamsSchema.parse(searchParams);
  const pageAsNumber = Number(page);
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber;
  // Number of items per page
  const perPageAsNumber = Number(per_page);
  const limit = isNaN(perPageAsNumber) ? 10 : perPageAsNumber;
  // Number of items to skip
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0;
  // Column and order to sort by
  if (!session) return (
    <Shell>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-semibold">You are not logged in</h1>
          <span className="text-muted-foreground">
            Login in to view you the logs.
          </span>
        </div>
      </div>
    </Shell>
  )
  return (
    <Shell className="max-auto max-w-6xl flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="xxs:flex-row flex flex-col gap-4 pr-1 ">
        <PageHeader
          id="dashboard-event-page-header"
          aria-labelledby="dashboard-event-page-header-heading"
        >
          <div className="flex space-x-4">
            <PageHeaderHeading size="sm" className="flex-1">
              Dev Punica Documents
            </PageHeaderHeading>

          </div>
d            Check Documents here.
d        </PageHeader>
      </div>
      {/* <Documents result={result} pageCount={pageCount} /> */}
    </Shell>
  )
}
