
import express from "express"
import { draw, populate } from "./map.js"

const app = express()
const port = 3000


app.get('/load', async (req, res) => {
    const points = await populate(req.query.ats, req.query.hmd, req.query.rfall)
    await draw(points)
    res.send('OK')
})
  
app.listen(port, () => {
    console.log(`Weather data service listening on port ${port} ...`)
})