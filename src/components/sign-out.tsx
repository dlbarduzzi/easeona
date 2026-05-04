"use client"

import { useRouter } from "next/navigation"
import { authClient } from "@/lib/client/auth"

export function SignOut() {
  const router = useRouter()

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in")
        },
      },
    })
  }

  return (
    <button type="button" onClick={signOut}>
      Sign out
    </button>
  )
}
