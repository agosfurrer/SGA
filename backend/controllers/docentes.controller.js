const Docente = require("../models/Docente.js") // de aca obtiene el esquema para tener la info
// Docente nos referimos al modelo, ayuda a trabajar con la info almacenada en la BD

async function obtenerDocentes(req, res) { // conexión asincrónica, es externo
    const docentes = await Docente.find()
    res.json(docentes)
}

async function obtenerDocente(req, res) {
    const docente = await Docente.findOne({
        legajo: Number(req.params.id) // param trae desde la url los datos tipo id
    }) 
    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }
    res.json(docente)
}

async function crearDocente(req, res) {
    const { legajo, nombre, especialidad, correo } = req.body
    if (!legajo || !nombre || !especialidad || !correo) { // no esta cargando datos 
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre !== "string") { // si no es string
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }
    if (typeof legajo !== "number") { // tipo legajo distinto a number
        return res.status(400).json({
            mensaje: "El legajo debe ser un número"
        })
    }
    // validación existencia
    const existe = await Docente.findOne({
        legajo
    })
    if (existe) {
        return res.status(400).json({
            mensaje: "El legajo ya existe"
        })
    }

    const nuevoDocente = await Docente.create({
        legajo,
        nombre,
        especialidad,
        correo
    })
    res.status(201).json(nuevoDocente)
}

async function actualizarDocente(req, res) {
    const { nombre, especialidad, correo } = req.body // campos a usar para que devuelva y legajo para busqueda
    const docente = await Docente.findOneAndUpdate(
        { legajo: Number(req.params.id) },
        { nombre, especialidad, correo },
        {
            returnDocument: "after" // devolvía el documento anterior, entonces dice actualizar pero q devuelva el nuevo
        }
    )
    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }
    res.json(docente)
}

async function eliminarDocente(req, res) {
    const docente = await Docente.findOneAndDelete(
        { legajo: Number(req.params.id) }
    )
    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }

    res.json({ mensaje: "Docente eliminado correctamente" })
}

module.exports = {
    obtenerDocentes,
    obtenerDocente,
    crearDocente,
    actualizarDocente,
    eliminarDocente
} // exporta la info a quien desee