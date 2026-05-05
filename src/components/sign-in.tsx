"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FullLogo } from "@/components/app-logo"

import { cn } from "@/lib/utils"
import { authClient } from "@/lib/client/auth"

export function SignIn() {
  function socialSignIn(provider: "github" | "google") {
    authClient.signIn.social({
      provider,
      callbackURL: "/dashboard",
      errorCallbackURL: `/error?action=sign-in&provider=${provider}`,
    })
  }
  return (
    <div className="px-4 flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-sm">
        <Link
          href="/"
          className={cn(
            "outline-none",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900",
          )}
        >
          <FullLogo />
          <span className="sr-only">Link to home page.</span>
        </Link>
        <div className="mt-4 text-center">
          <p className="font-medium text-neutral-500">
            Create an account or sign in
          </p>
        </div>
        <div className="mt-5 w-full max-w-70 flex flex-col items-center gap-y-2.5">
          <Button
            type="button"
            size="lg"
            className="w-full"
            onClick={() => socialSignIn("github")}
          >
            Continue with GitHub
          </Button>
          <Button
            type="button"
            size="lg"
            className="w-full"
            onClick={() => socialSignIn("google")}
          >
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  )
}
