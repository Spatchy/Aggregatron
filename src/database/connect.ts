import { Pool } from "pg"

const pool = new Pool({
  host: "aggregatron-db",
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
})

export { pool }