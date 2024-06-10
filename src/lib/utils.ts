import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as z from "zod"
import { toast } from "sonner"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return toast.error(errors.join("\n"))
  } else if (err instanceof Error) {
    return toast.error(err.message)
  } else {
    return toast.error("Something went wrong, please try again later.")
  }
}

export function truncate(str: string, length: number) {
  if (!str) return "";
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
