"use client"

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
    <div className="p-4">
      <button
        type="button"
        onClick={() => socialSignIn("github")}
      >
        Sign in with GitHub
      </button>
    </div>
  )
}
