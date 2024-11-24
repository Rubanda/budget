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
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DashboardShell } from "../shell";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { config } from "@/utils/config";
import { useSession } from "next-auth/react";
import { Textarea } from "../ui/textarea";
import { Icons } from "../icons";

type EditGroupProps = {
  id: number | undefined;
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: () => void;
};
export const MemberSchema = z.object({
  name: z.string(),
});
const EditGroup = ({ id, open, setOpen, refetch }: EditGroupProps) => {
  const { data: session } = useSession();

  const [isSaving, setIsSaving] = React.useState(false);
  // fetch group
  const form = useForm<z.infer<any>>({
    resolver: zodResolver(MemberSchema),
  });

 
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className=" mx-auto rounded-xl max-w-[90%]  md:max-w-[500px] overflow-y-auto ">
        <DialogHeader>
          <DialogTitle className="font-medium"> Edit group information</DialogTitle>
        </DialogHeader>
        <DashboardShell>
          <Form {...form}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3 "
            >
              <div className="flex flex-col gap-3 border-none ">
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
                            className=" "
                            {...field}

                          />

                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-end justify-end gap-3  ">
                <Button
                  variant="outline"
                  className="shadow-2xl"
                  onClick={() => {
                    setOpen(false);
                    form.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" className="shadow-2xl">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </DashboardShell>
      </DialogContent>
    </Dialog>
  );
};

export { EditGroup };
