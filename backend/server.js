const express = require("express")
const app = express()
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes.js")//transime a la ruta alumnos routes
app.use("/alumnos", alumnosRoutes)//arma esta ruta cuando alumnos routes llame


const docentesRoutes = require("./routes/docentes.routes.js")//transime a la ruta alumnos routes
app.use("/docentes", docentesRoutes)//arma esta ruta cuando alumnos routes llame



//01-09-2026
// Creación del Middleware con Express.json

//creo el middleware
app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    next()//muestra la respuesta
})

//escucha
app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})

