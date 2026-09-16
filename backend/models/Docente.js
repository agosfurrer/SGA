const mongoose = require("mongoose")

const docenteSchema = new mongoose.Schema({
    legajo: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

module.exports = mongoose.model("Docente", docenteSchema)