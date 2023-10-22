import express from "express"
import { selectAllFromActivities } from "./src/database/queries"

const app = express()
const port = 3000


app.get("/", async (req, res) => {
  const data = await selectAllFromActivities()
  res.send("Data: " + JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})