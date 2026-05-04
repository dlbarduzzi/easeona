import type { Metadata } from "next"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/server/auth"
import { SignIn } from "@/components/sign-in"

export const metadata: Metadata = {
  title: "Sign in",
}

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    return redirect("/dashboard")
  }

  return <SignIn />
}
