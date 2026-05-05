import Link from "next/link"

import { headers } from "next/headers"

import { Button } from "@/components/ui/button"
import { IconLogo } from "@/components/app-logo"
import { Container } from "@/components/container"

import { cn } from "@/lib/utils"
import { auth } from "@/lib/server/auth"

export async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return (
    <header className="bg-white border-b border-b-neutral-200">
      <Container>
        <div className="h-16 flex items-center justify-between gap-x-4">
          <Link
            href="/"
            className={cn(
              "outline-none rounded-md",
              "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900",
            )}
          >
            <IconLogo />
            <span className="sr-only">Link to home page.</span>
          </Link>
          {session === null ? (
            <div>
              <Button asChild>
                <Link href="/sign-in">
                  Sign in
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  )
}
