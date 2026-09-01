const express = require("express")
const router = express.Routes( ) //permite hacer las independencias de los archivos

router.get("/", (req, res) => {
    res.json(docentes)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id) 
    const docente = docentes.find(a => a.id === id) 
    res.json(docente) 
})

