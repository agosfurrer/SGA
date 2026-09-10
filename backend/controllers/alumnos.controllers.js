const Alumno = require("../models/Alumno.js")//de aca obtiene el esquema para tener la info
//Alumno nos referimos al modelo, ayuda a trabajar con la info almacenada en la BD



async function obtenerAlumnos(req,res) { //conexión asincrónica, es externo
    const alumnos = await Alumno.find()
    res.json(alumnos)
}

async function obtenerAlumno(req,res) {
    const alumno = await Alumno.findOne({
        legajo: Number(req.params.id)})//param trae desde la url los datos tipo id
    if(!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    res.json(alumno)
}

//const {id nombre carrera} = req.body q me traiga en el body- desestructura
async function crearAlumno  (req, res)  {
     const {legajo, nombre, carrera, correo} = req.body
    if (!legajo || !nombre || !carrera || !correo) { //no esta cargando datos 
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre !== "string") { // si no es string
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }
    const nuevoAlumno = await Alumno.create({
        legajo,
        nombre,
        carrera,
        correo
    })
    res.status(201).json(nuevoAlumno)//
    //console.log(req.body) para ver que esta enviando el cliente en un inicio
}

async function actualizarAlumno (req, res)  { // se cambia app por routes x la ruta correspondiente
    const alumno = await Alumno.findOneAndUpdate(
        {legajo: Number(req.params.id)},
        req.body, //dice que devuelva todo el cuerpo
        {
            returnDocument: "after"
        }
    )
    if(!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    res.json(alumno)
}

async function  eliminarAlumno  (req, res) { //trabajamos con el nombre de la función no función flecha
    const alumno = await Alumno.findOneAndDelete(
        {legajo: Number(req.params.id)}
    )
    if(!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} //exporta la info a quien desee