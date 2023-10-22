import { pool } from "./connect"

const selectAllFromActivities = async ():Promise<string[]> => {
  const res = await pool.query(
    "SELECT * FROM Activities"
  )
  return res.rows
}

export {
  selectAllFromActivities
}