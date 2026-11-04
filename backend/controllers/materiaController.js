const Materia = require("../models/Materia.js")

function validarDatosMateria(datos) {
    if (!datos || typeof datos !== "object" || Array.isArray(datos)) {
        return { error: "Los datos de la materia son inválidos" }
    }

    const { codigo, nombre, descripcion, cargaHoraria, estado } = datos

    if (typeof codigo !== "string" || !codigo || codigo !== codigo.trim()) {
        return { error: "El código es obligatorio y no debe tener espacios al inicio o al final" }
    }
    if (typeof nombre !== "string" || !nombre.trim() || nombre.trim().length > 120) {
        return { error: "El nombre es obligatorio y no puede superar los 120 caracteres" }
    }
    if (descripcion !== undefined && descripcion !== null && typeof descripcion !== "string") {
        return { error: "La descripción debe ser un texto" }
    }
    if (typeof descripcion === "string" && descripcion.length > 0 && !descripcion.trim()) {
        return { error: "La descripción no puede contener solo espacios" }
    }
    if (typeof cargaHoraria !== "number" || !Number.isInteger(cargaHoraria) || cargaHoraria < 0) {
        return { error: "La carga horaria debe ser un número entero mayor a cero" }
    }
    if (!["activa", "inactiva"].includes(estado)) {
        return { error: "El estado debe ser activa o inactiva" }
    }

    return {
        materia: {
            codigo,
            nombre: nombre.trim(),
            descripcion: typeof descripcion === "string" ? descripcion.trim() : "",
            cargaHoraria,
            estado
        }
    }
}

function responderError(res, error, mensaje) {
    if (error.code === 11000) {
        return res.status(409).json({ mensaje: "Ya existe una materia con ese código" })
    }
    if (error.name === "ValidationError" || error.name === "CastError") {
        return res.status(400).json({ mensaje: "Los datos de la materia no son válidos" })
    }

    console.error("Error en materias:", error)
    return res.status(500).json({ mensaje })
}

async function obtenerMaterias(req, res) {
    try {
        const materias = await Materia.find().sort({ codigo: 1 })
        res.json(materias)
    } catch (error) {
        responderError(res, error, "No se pudieron obtener las materias")
    }
}

async function obtenerMateria(req, res) {
    try {
        const materia = await Materia.findOne({ codigo: req.params.codigo })
        if (!materia) {
            return res.status(404).json({ mensaje: "Materia no encontrada" })
        }
        res.json(materia)
    } catch (error) {
        responderError(res, error, "No se pudo obtener la materia")
    }
}

async function crearMateria(req, res) {
    const resultado = validarDatosMateria(req.body)
    if (resultado.error) {
        return res.status(400).json({ mensaje: resultado.error })
    }

    try {
        const existente = await Materia.findOne({ codigo: resultado.materia.codigo })
        if (existente) {
            return res.status(409).json({ mensaje: "Ya existe una materia con ese código" })
        }

        const nuevaMateria = await Materia.create(resultado.materia)
        res.status(201).json(nuevaMateria)
    } catch (error) {
        responderError(res, error, "No se pudo registrar la materia")
    }
}

async function actualizarMateria(req, res) {
    const resultado = validarDatosMateria(req.body)
    if (resultado.error) {
        return res.status(400).json({ mensaje: resultado.error })
    }

    try {
        const { codigo } = req.params
        const codigoNuevo = resultado.materia.codigo
        const duplicada = await Materia.findOne({
            $and: [
                { codigo: codigoNuevo },
                { codigo: { $ne: codigo } }
            ]
        })
        if (duplicada) {
            return res.status(409).json({ mensaje: "Ya existe una materia con ese código" })
        }

        const materia = await Materia.findOneAndUpdate(
            { codigo },
            { $set: resultado.materia },
            { new: true, runValidators: true }
        )
        if (!materia) {
            return res.status(404).json({ mensaje: "Materia no encontrada" })
        }
        res.json(materia)
    } catch (error) {
        responderError(res, error, "No se pudo actualizar la materia")
    }
}

async function eliminarMateria(req, res) {
    try {
        const materia = await Materia.findOneAndDelete({ codigo: req.params.codigo })
        if (!materia) {
            return res.status(404).json({ mensaje: "Materia no encontrada" })
        }
        res.json({ mensaje: "Materia eliminada correctamente" })
    } catch (error) {
        responderError(res, error, "No se pudo eliminar la materia")
    }
}

module.exports = {
    obtenerMaterias,
    obtenerMateria,
    crearMateria,
    actualizarMateria,
    eliminarMateria
}