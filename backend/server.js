//inicia el servidor express
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const conectarDB = require("./config/database.js")
const alumnosRoutes = require("./routes/alumnos.routes.js") // transmite a la ruta alumnos routes
const docentesRoutes = require("./routes/docentes.routes.js") // transmite a la ruta docentes routes

// Middlewares
app.use(express.json())
app.use(cors())

// Rutas
app.use("/alumnos", alumnosRoutes)
app.use("/docentes", docentesRoutes)

// Conexión a la BD
conectarDB()
console.log("Ejecutando con nodemon")

const PORT = process.env.PORT

// Escucha del servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})