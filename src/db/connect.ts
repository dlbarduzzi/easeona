import postgres from "postgres"

import { env } from "@/lib/server/env"
import { drizzle } from "drizzle-orm/postgres-js"

import {
  user,
  userRelations,
  account,
  accountRelations,
  session,
  sessionRelations,
  verification,
} from "./schemas/auth"

const schema = {
  user,
  userRelations,
  account,
  accountRelations,
  session,
  sessionRelations,
  verification,
}

const client = postgres(env.DATABASE_URL)
const connect = drizzle({ client, schema })

export const db = connect
export type DB = typeof db
