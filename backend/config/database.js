const mongoose = require("mongoose")

async function conectarDB() { //conecta con la base de datos
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base de Datos conectada")
    } catch {
        console.log(error)
    }
}

module.exports = conectarDB //genera conexión