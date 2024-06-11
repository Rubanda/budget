"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { createEvent } from '../../actions'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { DashboardShell } from "@/components/shell";
import { toast } from "sonner";
import React from "react";
import { catchError, cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { eventSchema, EventPayload } from "@/lib/validation/event";
import { Textarea } from "@/components/ui/textarea";
const AddEvent = () => {
  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
  });
  const [isSaving, setIsSaving] = React.useState(false);
  const [isPending, startTransition] = React.useTransition()

  const [open, setOpen] = React.useState(false);
  function onSubmit(data: EventPayload) {
    const payload = JSON.stringify({
      summary: data.summary,
      start: {
        dateTime: new Date(data.start).toISOString(),
      },
      end: {
        dateTime: new Date(data.end).toISOString(),
      },
      description: data.description
    })
    console.log(payload)

    startTransition(async () => {
      try {
        await createEvent(payload)

        form.reset()
        toast.success("Event added successfully.")
        setOpen(!open)
      } catch (err) {
        catchError(err)
      }
    })
  }
  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogTrigger asChild>
          <Button
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "outline",
              }),
              "text-foreground"
            )}
            size="default"
          >
            {" "}
            <Icons.plus className="h-4 w-4" />
            create Event
          </Button>
        </DialogTrigger>
        <DialogContent className=" mx-auto   overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-foreground">
            Add event
          </DialogDescription>
          <DashboardShell>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 "
              >
                <div className=" flex flex-col gap-3 border-none ">
                  <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Summary</FormLabel>
                        <Input id="summary" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="start"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start</FormLabel>
                        <Input type='datetime-local' id="start" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="end"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>End</FormLabel>
                        <Input type='datetime-local' id="end" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Description</FormLabel>
                        <Textarea id="description" className="col-span-3" {...field} />
                      </FormItem>
                    )}
                  />
                </div>
                <Card className="flex items-end justify-end gap-3 border-none p-3 ">
                  <DialogTrigger asChild>
                    <Button variant="outline" className="shadow-2xl">
                      Cancel
                    </Button>
                  </DialogTrigger>
                  <Button type="submit" className="shadow-2xl" disabled={isPending}>
                    {isPending && (
                      <Icons.spinner
                        className="mr-2 size-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    Add Event
                  </Button>
                </Card>
              </form>
            </Form>
          </DashboardShell>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { AddEvent };
