const docentes = require("../data/docentes.js")

function obtenerDocentes(req, res) {
    res.json(docentes)
}

function obtenerDocente(req, res) {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)
    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }
    res.json(docente)
}

function crearDocente(req, res) {
    const nuevoDocente = req.body
    const { id, nombre, especialidad } = req.body

    if (!id || !nombre || !especialidad) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }

    if (typeof nombre !== "string") {
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }

    docentes.push(nuevoDocente)
    res.status(201).json({ mensaje: "Docente registrado correctamente" })
}

function actualizarDocente(req, res) {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)

    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }

    docente.id = req.body.id
    docente.nombre = req.body.nombre
    docente.especialidad = req.body.especialidad

    res.json({ mensaje: "Docente actualizado correctamente" })
}

function eliminarDocente(req, res) {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)

    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }

    const docentesActualizados = docentes.filter(d => d.id !== id)

    docentes.length = 0
    docentes.push(...docentesActualizados)

    res.json({ mensaje: "Docente eliminado correctamente" })
}

module.exports = {
    obtenerDocentes,
    obtenerDocente,
    crearDocente,
    actualizarDocente,
    eliminarDocente
}