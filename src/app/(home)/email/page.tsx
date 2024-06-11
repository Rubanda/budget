'use client'
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shell } from "@/components/shell/shell";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/shell/page-header";
import { getCurrentUser } from '@/lib/session';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
dayjs.extend(customParseFormat);
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { useSession } from "next-auth/react";
import { truncate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { status } = useSession()
  const [showDetails, setShowDetails] = React.useState(false);
  const [emailName, setEmailName] = React.useState<string>();
  const [emailId, setEmailId] = React.useState<number>();

  if (status === 'unauthenticated') return (
    <Shell>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-semibold">You are not logged in</h1>
          <span className="text-muted-foreground">
            Login in to view your events and create new events.
          </span>
        </div>
      </div>
    </Shell>
  )

  const parseEmailContent = (emailContent: string) => {
    return JSON.parse(emailContent)
  }

  return (
    <Shell className="max-auto max-w-6xl flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="xxs:flex-row flex flex-col gap-4 pr-1 ">
        <PageHeader
          id="dashboard-event-page-header"
          aria-labelledby="dashboard-event-page-header-heading"
        >
          <div className="flex space-x-4">
            <PageHeaderHeading size="sm" className="flex-1">
              Email Templates
            </PageHeaderHeading>

          </div>
        
        </PageHeader>
      </div>
      <div className="grid grid-cols-1 gap-3 ">
        <Alert variant='default' className="bg-violet-100 dark:bg-violet-200 dark:text-black">
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            we have tested everything even the other emails without changes.✅
          </AlertDescription>
        </Alert>
        {showDetails && <p>hello</p>}
        <div className="grid grid-cols-1 ">

        </div>
      </div>
    </Shell>
  )
}