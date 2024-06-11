import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Link from "next/link";
import React from "react";
import { Card } from "@/components/ui/card";
import { Shell } from "@/components/shell/shell";
import { AddEvent } from "./add-event";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/shell/page-header";
import { Icons } from '@/components/icons';
import { getCurrentUser } from '@/lib/session';
import { User } from 'next-auth';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
dayjs.extend(customParseFormat);

async function events(session: (User & {
  id: string;
  username?: string | null | undefined;
  token?: any;
  image?: string | undefined;
  role?: string | undefined;
}) | undefined) {
  try {
    const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      headers: {
        'Authorization': 'Bearer ' + session!?.token,
      },
      cache: 'no-store'
    },)
    const resJson = await res.json()
    // only get event that start from today and after
    const data = resJson.items.slice(10, -1)
    console.log(data)
    return resJson.items
  } catch (e) {
    console.log(e)
  }
}

export default async function Home() {
  const session = await getCurrentUser()
  if (!session) return (
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

  const data = await events(session)
  return (
    <Shell className="mx-auto max-w-6xl flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="xxs:flex-row flex flex-col gap-4 pr-1 ">
        <PageHeader
          id="dashboard-event-page-header"
          aria-labelledby="dashboard-event-page-header-heading"
        >
          <div className="flex space-x-4">
            <PageHeaderHeading size="sm" className="flex-1">
              Events
            </PageHeaderHeading>
            <AddEvent />
          </div>
        </PageHeader>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          {data?.slice(0, Math.floor(data.length / 2) + 1).map((event: any) => (
            <HoverCard key={event.id}>
              <HoverCardTrigger>
                <Link href={`/event/${event.id}`} >
                  <Card key={event.id} className="p-4">
                    <span className="">
                      <Icons.calendar />
                    </span>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="">{event.summary}</h3>
                      <div className="flex flex-col">
                        <span>{event.start?.date ?
                          dayjs(event.start?.date).format("DD MMMM YYYY") :
                          event.start?.dateTime ?
                            dayjs(event.start?.dateTime).format('DD MMM YYYY') : null}</span>
                        <span>
                          {event.start?.dateTime ? dayjs(event.start?.dateTime).format('hh a') : 'no time'} to
                          {event.start?.dateTime ? dayjs(event.start?.dateTime).format('hh a') : 'no time'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="flex text-sm text-foreground/60 ">
                        {event?.organizer ? event?.organizer?.email : 'no organiser'}
                      </span>
                    </div>
                  </Card>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={session?.image} />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{event?.organizer ? event?.organizer?.displayName : 'Event'}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <p className="text-sm">{event?.organizer ? event?.organizer?.email : 'no organiser'}  </p>
                      <Icons.status className="mr-2 text-green-500 h-4 w-4 opacity-70" />{" "}
                    </div>
                    <div className="flex items-center pt-2">
                      <Icons.calendar className="mr-2 h-4  w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        {dayjs(event?.created).format('DD MMMM YYYY')}
                      </span>
                    </div>
                  </div>
                </div>

              </HoverCardContent>
            </HoverCard>

          ))}
        </div>
        <div className="flex flex-col gap-2">
          {data
            ?.slice(Math.floor(data.length / 2) + 1, data.length)
            .map((event: any) => (
              <HoverCard key={event.id}>
                <HoverCardTrigger>
                  <Link href={`/event/${event.id}`}>
                    <Card key={event.id} className="p-4">
                      <span className="">
                        <Icons.calendar />
                      </span>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="">{event.summary}</h3>
                        <div className="flex flex-col">
                          <span>{event.start?.date ?
                            dayjs(event.start?.date).format("DD MMMM YYYY") : event.start?.dateTime ?
                              dayjs(event.start?.dateTime).format('DD MMMM YYYY') : null}</span>
                          <span>
                            {event.start?.dateTime ?
                              dayjs(event.start?.dateTime).format('hh a') : 'no time'} to {event.start?.dateTime ?
                                dayjs(event.start?.dateTime).format('hh a') : 'no time'}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="flex text-sm text-foreground/60 ">
                          {event?.organizer ? event?.organizer?.email : 'no organiser'}
                        </span>
                      </div>
                    </Card>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={session?.image} />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{event?.organizer ? event?.organizer?.displayName : 'Event'}</h4>
                      <div className="flex gap-2 items-center text-sm">
                        <p className="text-sm">{event?.organizer ? event?.organizer?.email : 'no organiser'}  </p>
                        <Icons.status className="mr-2 text-green-500 h-4 w-4 opacity-70" />{" "}
                      </div>
                      <div className="flex items-center pt-2">
                        <Icons.calendar className="mr-2 h-4  w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          {dayjs(event?.created).format('DD MMMM YYYY')}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
        </div>
      </div>
    </Shell>
  )
}