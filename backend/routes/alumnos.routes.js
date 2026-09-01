const express = require("express")
const router = express.Routes( ) //permite hacer las independencias de los archivos

router.get("/", (obtenerAlumnos))

router.get("/:id", (req, res) => {
    const id = Number(req.params.id) 
    const alumno = alumnos.find(a => a.id === id) 
    res.json(alumno) 
})


//creamos solicitud post
router.post("/", (req, res) => {
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje: "Alumno registrado correctamente"})
    //console.log(req.body) para ver que esta enviando el cliente en un inicio
})

// req.params me toma el id
// req.body busca
router.put("/:id", (req, res) => { // se cambia app por routes x la ruta correspondiente
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)//compara el id que trae
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    alumnos = alumnos.filter(alumno => alumno.id !== id)
    res.json({mensaje: "Alumno eliminado correctamente"})
})

module.export = router //solicita cualquier ruta escrita