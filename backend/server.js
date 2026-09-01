const express = require("express")

const app = express()

app.use(express.json())


//alumnos
let alumnos = [
    {
        id: 1,
        nombre: "Inti",
        carrera: "Programación",

    },
    {
        id: 2,
        nombre: "Lucas",
        carrera: "Programación"
    },
    {
            id: 3,
        nombre: "Nina",
        carrera: "Legislación"
    },
    {
            id: 4,
        nombre: "Santi",
        carrera: "Prograación"
    },
    {
            id: 5,
        nombre: "Flopy",
        carrera: "Análisis de Datos"
    },
    {
            id: 6,
        nombre: "Juli",
        carrera: "Organización y Gestión"
    },
    {
            id: 7,
        nombre: "Gino",
        carrera: "Base de Datos"
    }
]

app.get("/alumnos", (req, res) => {
    res.json(alumnos)
})

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id) 
    const alumno = alumnos.find(a => a.id === id) 
    res.json(alumno) 
})

//docentes
const docentes = [
    {
        id: 1,
        nombre: "Delia",
        carrera: "Programación",

    },
    {
        id: 2,
        nombre: "Luca",
        carrera: "Programación"
    },
    {
            id: 3,
        nombre: "Brenda",
        carrera: "Legislación"
    },
    {
            id: 4,
        nombre: "Santino",
        carrera: "Prograación"
    },
    {
            id: 5,
        nombre: "Nati",
        carrera: "Análisis de Datos"
    },
    {
            id: 6,
        nombre: "Julián",
        carrera: "Organización y Gestión"
    },
    {
            id: 7,
        nombre: "Pedro",
        carrera: "Base de Datos"
    }
]

app.get("/docentes", (req, res) => {
    res.json(docentes)
})

app.get("/docentes/:id", (req, res) => {
    const id = Number(req.params.id) 
    const docente = docentes.find(a => a.id === id) 
    res.json(docente) 
})


//creamos solicitud post
app.post("/alumnos", (req, res) => {
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje: "Alumno registrado correctamente"})
    //console.log(req.body) para ver que esta enviando el cliente en un inicio
})

// req.params me toma el id
// req.body busca
app.put("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)//compara el id que trae
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
})

app.delete("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id)
    alumnos = alumnos.filter(alumno => alumno.id !== id)
    res.json({mensaje: "Alumno eliminado correctamente"})
})


//escucha
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})

