import express from "express"
import { connect } from "./src/database/connect"

const app = express()
const port = 3000


app.get("/", (req, res) => {
  // Connect to DB
  connect((data:string):void => {
    res.send(data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})