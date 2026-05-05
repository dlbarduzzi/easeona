import type { ReactNode } from "react"

import { Header } from "@/components/header"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1 grid grid-cols-1">{children}</main>
    </div>
  )
}
