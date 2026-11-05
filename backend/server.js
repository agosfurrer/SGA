//inicia el servidor express
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const conectarDB = require("./config/database.js")
const alumnosRoutes = require("./routes/alumnos.routes.js") // transmite a la ruta alumnos routes
const docentesRoutes = require("./routes/docentes.routes.js") // transmite a la ruta docentes routes
const materiasRoutes = require("./routes/materias.routes.js") //sirve para transmitir a la ruta materias routes
const authRoutes = require("./routes/auth.routes.js") //ruta para autenticación

// Middlewares
app.use(express.json())
app.use(cors())

// Rutas
app.use("/alumnos", alumnosRoutes)
app.use("/docentes", docentesRoutes)
app.use("/materias", materiasRoutes) //esta línea permite que se pueda acceder a la ruta materias routes
app.use("/auth", authRoutes) //ruta para autenticación

// Conexión a la BD
conectarDB()
console.log("Ejecutando con nodemon")

const PORT = process.env.PORT

// Escucha del servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})