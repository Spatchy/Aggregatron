import express from "express"
import { router } from "./src/api/endpoints"

const app = express()
const port = 3000

app.use(router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})