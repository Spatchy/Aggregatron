import { 
  selectAllFromActivities,
  selectNMostRecentActivites,
  selectNMostRecentActivitesByService
} from "../database/queries"
import { Router } from "express"
import bodyParser from "body-parser"

const router = Router()

const jsonParser = bodyParser.json()

router.get("/", async (req, res) => {
  const data = await selectAllFromActivities()
  res.send("Response: " + JSON.stringify(data))
})

router.post("/recent", jsonParser, async (req, res) => {
  let data = []
  if (!req.body?.numberToRetrieve) { // consider moving this to separate validation method
    res.status(400).send({ message: "Must include number to retrieve" })
    return
  } else if (!req.body.service) {
    data = await selectNMostRecentActivites(req.body.numberToRetrieve)
  } else {
    data = await selectNMostRecentActivitesByService(req.body.numberToRetrieve, req.body.service)
  }
  res.send("Response: " + JSON.stringify(data))
})

export { router }
