import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
type Props = {
  handleOpen: () => void;
  name?: string;
};
export const CreateButton: React.FC<Props> = ({ handleOpen, name }) => {
  return (
    <Button
      className={cn(
        buttonVariants({
          size: "sm",
          variant: "outline",
        }),
        "text-foreground"
      )}
      onClick={() => handleOpen()}
    >
      <Icons.plus className="h-4 w-4" />
      {name ?? "Create"}
    </Button>
  );
};
