const express = require("express")

const app = express()

//alumnos
const alumnos = [
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


//escucha
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})