//representa ese encargado, una carpeta representa alumnos que contiene un esquema o info de los alumnos
//model alumno representa al encargado de manejar esos archivos, paso intermedio entre mongoose, 
//encargado en manejar la herramienta
const mongoose = require("mongoose")

const alumnoSchema = new mongoose.Schema({
    legajo: { //valida valores
        type: Number, //valor entero
        unique: true //valor único
    },
    nombre: String,
    carrera: String,
    correo: String
},
{
    versionKey: false //debería de desaparecer los próximos generados, versión = "__v: " a partir de este
})

const Alumno = mongoose.model("Alumno", alumnoSchema)

module.exports = Alumno