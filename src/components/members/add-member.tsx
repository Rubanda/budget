"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DashboardShell } from "../shell";

import { useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { config } from "@/utils/config";
import { useSession } from "next-auth/react";
import { Separator } from "../ui/separator";
import { Icons } from "../icons";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: () => void;
};
export const MemberSchema = z.object({
  name: z.string(),
});
const AddMember = ({ open, setOpen, refetch }: Props) => {
  const { data: session } = useSession();
  const form = useForm<z.infer<any>>({
    resolver: zodResolver(MemberSchema),
  });

  const [isSaving, setIsSaving] = React.useState(false);

  
  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent className="mx-auto  font-medium rounded-xl max-w-[90%] md:max-w-[500px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-medium ">Add Group</DialogTitle>
          </DialogHeader>
          <DashboardShell>
            <Form {...form}>
              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 "
              >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl  >
                          <Input id="name"
                            type="text"
                            placeholder="Enter Group name"
                            required
                            className="border-0 font-semibold text-lg shadow-none focus-visible:ring-0 hover:bg-muted" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl>
                          <div className="flex items-start gap-2">
                            <Icons.text className="ml-auto h-4 w-4 opacity-50" />
                            <Textarea
                              id="description"
                              placeholder="Description"
                              className="resize-none"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                <div className="flex items-end justify-end gap-3 pb-3  px-6">
                  <DialogTrigger asChild>
                    <Button variant="outline" className="shadow-2xl">
                      Cancel
                    </Button>
                  </DialogTrigger>
                  <Button type="submit" className="shadow-2xl">
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </DashboardShell>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { AddMember };
