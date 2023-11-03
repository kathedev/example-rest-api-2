import express from "express"
import {config} from 'dotenv'
config()

import mascotasRoutes from './routes/mascota.routes.js'

const PORT = process.env.PORT || 3004;

const app  = express()
app.use(express.json())

app.use("/api/mascota",mascotasRoutes )

app.listen(PORT,()=>{
    console.log("😏el servidor se esta ejecutando en http://localhost:" + PORT)
})