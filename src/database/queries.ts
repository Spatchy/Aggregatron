import { pool } from "./connect"

// Use for testing/debugging purposes only!
const selectAllFromActivities = async ():Promise<string[]> => {
  const res = await pool.query(
    "SELECT * FROM Activities"
  )
  return res.rows
}

const selectNMostRecentActivites = async (numberToRetrieve:number):Promise<string[]> => {
  const paramatizedSql = (
    `SELECT *
    FROM Activities
    ORDER BY published_date DESC
    LIMIT $1;`
  )
  const parametersToInsert = [ numberToRetrieve ]
  const res = await pool.query(paramatizedSql, parametersToInsert)
  return res.rows
}

const selectNMostRecentActivitesBeforeDate = async (numberToRetrieve:number, beforeDate:Date):Promise<string[]> => {
  const timestamp = new Date(beforeDate).toISOString()
  const paramatizedSql = (
    `SELECT *
    FROM Activities
    WHERE published_date < $1
    ORDER BY published_date DESC
    LIMIT $2;`
  )
  const parametersToInsert = [ timestamp, numberToRetrieve  ]
  const res = await pool.query(paramatizedSql, parametersToInsert)
  return res.rows
}

const selectNMostRecentActivitesByService = async (
  numberToRetrieve:number,
  service:string
):Promise<string[]> => {
  const paramatizedSql = (
    `SELECT *
    FROM Activities
    WHERE service = $1
    ORDER BY published_date DESC
    LIMIT $2;`
  )
  const parametersToInsert = [ service, numberToRetrieve ]
  const res = await pool.query(paramatizedSql, parametersToInsert)
  return res.rows
}

const selectNMostRecentActivitesBeforeDateByService = async (
  numberToRetrieve:number,
  beforeDate:Date,
  service:string
):Promise<string[]> => {
  const timestamp = new Date(beforeDate).toISOString()
  const paramatizedSql = (
    `SELECT *
    FROM Activities
    WHERE published_date < $1
      AND service = $2
    ORDER BY published_date DESC
    LIMIT $3;`
  )
  const parametersToInsert = [ timestamp, service, numberToRetrieve ]
  const res = await pool.query(paramatizedSql, parametersToInsert)
  return res.rows
}

export {
  selectAllFromActivities,
  selectNMostRecentActivites,
  selectNMostRecentActivitesBeforeDate,
  selectNMostRecentActivitesByService,
  selectNMostRecentActivitesBeforeDateByService
}