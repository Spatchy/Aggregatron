import express from "express"
import { router } from "./src/api/endpoints"

const app = express()
const port = 3000

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})