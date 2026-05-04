import type { Metadata } from "next"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/server/auth"
import { SignOut } from "@/components/sign-out"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return redirect("/sign-in")
  }

  return (
    <div className="p-4">
      <div>Dashboard!</div>
      <div className="mt-3 bg-neutral-100 max-w-fit text-sm p-4 rounded-lg">
        <pre>{JSON.stringify(session.user, null, 2)}</pre>
      </div>
      <div className="mt-3">
        <SignOut />
      </div>
    </div>
  )
}
