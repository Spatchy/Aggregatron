import { Client } from "pg"

const connect = (callback: ((arg0: string) => void)):void => {
  const client = new Client({
    host: "aggregatron-db",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
  })
  
  client.connect(async (err) => {
    if (err) throw err
    console.log("Connected to db!")
    const response = await client.query("SELECT * FROM Activities")
    callback(JSON.stringify(response.rows))
  })
}

export { connect }