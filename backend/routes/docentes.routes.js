const express = require("express")
const { obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente } = require("../controllers/docentes.controller.js")
const router = express.Router() // permite hacer las independencias de los archivos

router.get("/", obtenerDocentes) // aca usamos las variables sin llamar función

router.get("/:id", obtenerDocente)

// creamos solicitud post
router.post("/", crearDocente)

// req.params me toma el id
// req.body busca
router.put("/:id", actualizarDocente)

router.delete("/:id", eliminarDocente)

module.exports = router // solicita cualquier ruta escrita
