const express = require("express")
const app = express()
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes.js")//transime a la ruta alumnos routes
app.use("/alumnos", alumnosRoutes)//arma esta ruta cuando alumnos routes llame
const docentesRoutes = require("./routes/docentes.routes.js")//transime a la ruta alumnos routes
app.use("/docentes", docentesRoutes)//arma esta ruta cuando alumnos routes llame

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

//creo el middleware
app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    next()//muestra la respuesta
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



//01-09-2026
// Creación del Middleware con Express.json

//escucha
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})

