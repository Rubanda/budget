"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/shell/shell";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
interface Props {
  params: {
    id: string;
  };
}
const imag1 =
  "https://img.icons8.com/?size=128&id=79059&format=png";
export default function SingleEvent({ params }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = params;
  const [contents, setContents] = React.useState<any>();
  // fetch a single event from google calendar
  React.useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + session!?.user?.token,
        },
      }
      );
      const data = await res.json();
      console.log(data);
      setContents(data);
    };
    fetchEvent();
  }
    , [id]);
  // delete event and redirect to events page
  const deleteEvent = async () => {
    console.log({id})
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + session!?.user?.token,
      },
    }
    );
    console.log(res);
    toast.success("Event deleted successfully.")
    router.push('/event')
  };

  return (
    <Shell variant="sidebar" className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <div className="xxs:flex-row flex flex-col gap-4 space-y-8 pr-1 ">
        <div className="flex flex-col items-start justify-start gap-3 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-foreground">
              {contents?.summary}
            </h1>
            <div className="flex gap-3">
              <span>{contents?.start?.date}</span>
              <Separator orientation="vertical" className="h-5" />
              <span>
                {/* {fromTime} To {toTime} */}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="" variant="outline" onClick={()=> deleteEvent()}>
                    delete
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>delete event</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <Button
              className="hover:bg-none"
              variant="link"
              onClick={handleOpen}
            >
              <Icons.crossedcircle className="h-8 w-8" />
            </Button> */}
          </div>
        </div>
      </div>

      <div className=" w-full flex-1 overflow-hidden rounded-lg">
        <div className="mx-auto w-full md:w-[70%]">
          <Image
            className=" rounded-lg object-cover "
            width={100}
            height={50}
            src={imag1}
            alt="Event Image"
          />

        </div>

        <pre>
          {JSON.stringify(contents, null, 2)}
        </pre>



        {/* </div> */}
      </div>
    </Shell>
  );
}
