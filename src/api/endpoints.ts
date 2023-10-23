import { 
  selectNMostRecentActivites,
  selectNMostRecentActivitesBeforeDate,
  selectNMostRecentActivitesBeforeDateByService,
  selectNMostRecentActivitesByService
} from "../database/queries"
import { Router } from "express"
import bodyParser from "body-parser"
import cors, { CorsOptions } from "cors"

const router = Router()

const jsonParser = bodyParser.json()


const corsOptions:CorsOptions = {
  origin: process.env.ALLOWED_ORIGINS!.replace(/\s/g, "").split(",")
}

router.use(cors(corsOptions))

router.get("/", async (req, res) => {
  res.set("Content-Type", "text/html")
  const data = Buffer.from(
    `<h1>Aggregatron v2023.10.24</h1>
    See <a href='https://github.com/spatchy/Aggregatron'>the repo</a> for documentation`
  )
  res.send(data)
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
  res.send(data)
})

router.post("/paginated", jsonParser, async (req, res) => {
  let data = []
  if (!req.body?.numberToRetrieve) { // consider moving this to separate validation method
    res.status(400).send({ message: "Must include number to retrieve" })
    return
  } else if (!req.body.beforeDate) {
    res.status(400).send({ message: "Must include a beforeDate" })
    return
  } else if (!req.body.service) {
    data = await selectNMostRecentActivitesBeforeDate(req.body.numberToRetrieve, req.body.beforeDate)
  } else {
    data = await selectNMostRecentActivitesBeforeDateByService(req.body.numberToRetrieve, req.body.beforeDate, req.body.service)
  }
  res.send(data)
})

export { router }
