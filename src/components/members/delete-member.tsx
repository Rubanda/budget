"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React from "react";
import { useRouter } from "next/navigation";
import { config } from "@/utils/config";
import { useSession } from "next-auth/react";
type AlertDialogProps = {
  id: number | undefined;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
};

export function DeleteGroup({ id, open, setOpen, refetch }: AlertDialogProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const handleDele = async () => {
    const res = await fetch(`${config.backendUrl}/api/groups/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token!}`,
      },
    });
    refetch();
    router.push("/groups");
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="rounded-xl max-w-[90%] md:max-w-[500px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDele()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
