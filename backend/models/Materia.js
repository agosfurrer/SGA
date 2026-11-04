const mongoose = require("mongoose")

const materiaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: [true, "El código es obligatorio"],
        validate: {
            validator: codigo => codigo === codigo.trim(),
            message: "El código no debe tener espacios al inicio o al final"
        }
    },
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        trim: true,
        minlength: [1, "El nombre no puede estar vacío"],
        maxlength: [120, "El nombre no puede superar los 120 caracteres"]
    },
    descripcion: {
        type: String,
        validate: {
            validator: descripcion => descripcion == null || descripcion === "" || descripcion.trim().length > 0,
            message: "La descripción no puede contener solo espacios"
        }
    },
    cargaHoraria: {
        type: Number,
        required: [true, "La carga horaria es obligatoria"],
        min: [1, "La carga horaria debe ser mayor a cero"],
        validate: {
            validator: Number.isInteger,
            message: "La carga horaria debe ser un número entero"
        }
    },
    estado: {
        type: String,
        required: [true, "El estado es obligatorio"],
        enum: {
            values: ["activa", "inactiva"],
            message: "El estado debe ser activa o inactiva"
        }
    }
}, {
    versionKey: false
})

materiaSchema.index({ codigo: 1 }, { unique: true })

const Materia = mongoose.model("Materia", materiaSchema)

module.exports = Materia