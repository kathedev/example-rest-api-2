import { Router} from 'express'
import fs from 'fs' // file system
import path from 'path'

const mascotaFile = path.join(process.cwd(), "data", "mascota.json")
const router = Router()

router.get("/", (req, res)=> {
    const mascota = readFile()
    res.json(mascota)
})

router.post("/", (req, res)=> {
    const mascota = req.body
    saveFile(mascota)
    res.json("la mascota a sido guardada")
})

function readFile(){
    const result = fs.readFileSync(mascotaFile, "utf-8")
    const json = JSON.parse(result)
    return json
}

function saveFile(mascota){
    const contenidoActual = readFile()
    const todosLosIds = contenidoActual.map((aminal)=> animal.id)
    const nuevoId = Math.max(...todosLosIds, 0) + 1

    const nuevaMascota = { ...mascota, id: nuevoId}

    const contenidoNuevo = [...contenidoActual, nuevaMascota]
    fs.writeFileSync(mascotaFile, JSON.stringify(contenidoNuevo), null, 2)
}

export default router