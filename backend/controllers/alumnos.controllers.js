const alumnos = require("../data/alumnos.js")

function obtenerAlumnos(req,res) {
    res.json(alumnos)
}

function obtenerAlumno(req,res) {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    if(!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    res.json(alumnos)
}

function crearAlumno  (req, res)  {
    const nuevoAlumno = req.body
    const {id, nombre, carrera} = req.body //q me traiga en el body- desestructura
    if (!id || !nombre || !carrera) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre !== "string") {
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }
    alumnos.push(nuevoAlumno)
    res.status(201).json({mensaje: "Alumno registrado correctamente"})//
    //console.log(req.body) para ver que esta enviando el cliente en un inicio
}

function actualizarAlumno (req, res)  { // se cambia app por routes x la ruta correspondiente
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)//compara el id que trae
    if(!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
}

function  eliminarAlumno  (req, res) { //trabajamos con el nombre de la función no función flecha
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    if(!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id)//pasa el nuevo array generado por filter()

    alumnos.lenght = 0
    alumnos.push(...alumnosActualizados)//agrega directamente todo el nuevo array hacia el final
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} //exporta la info a quien desee