const express = require("express")
const router = express.Router()

const {
    obtenerDocentes,
    obtenerDocente,
    crearDocente,
    actualizarDocente,
    eliminarDocente
} = require("../controllers/docentes.controller.js")

router.get("/", obtenerDocentes)
router.get("/:id", obtenerDocente)
router.post("/", crearDocente)
router.put("/:id", actualizarDocente)
router.delete("/:id", eliminarDocente)

module.exports = router
