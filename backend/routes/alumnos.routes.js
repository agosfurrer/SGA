const express = require("express")
//const alumnosController = require("../controllers/alumnos.controllers.js")
const {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controllers.js")
const router = express.Router( ) //permite hacer las independencias de los archivos

router.get("/", obtenerAlumnos)//aca usamos las variables sin llamar función
//router.get("/", alumnosController.obtenerAlumnos) -- directamente cada vez q se llama una función se utiliza la variable alumnosController

router.get("/:id", obtenerAlumno)

//creamos solicitud post
router.post("/", crearAlumno)

// req.params me toma el id
// req.body busca
router.put("/:id", actualizarAlumno)

router.delete("/:id", eliminarAlumno)

module.exports = router //solicita cualquier ruta escrita