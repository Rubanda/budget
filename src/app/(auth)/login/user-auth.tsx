"use client"

import * as React from "react"
import { signIn } from "next-auth/react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)
  return (
    <div className="flex items-center justify-center gap-6" {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), className)}
        onClick={() => {
          setIsGoogleLoading(true)
          signIn('google', { callbackUrl: '/' })
        }}
        disabled={isLoading || isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}Google
      </button>
    </div>
  )
}