import { useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"

function FormularioA({onAlumnoCreado}) {
    const [formulario,setFormulario] = useState({
        legajo: "",
        nombre: "",
        carrera: "",
        correo: ""
    })
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    function manejarCambio(e) { // escucha los inputs
        const {name, value} = e.target // e.target ocupa esos objetos 

        setFormulario({ // ...= trae toda la info actualizada sin modificar lo q ya hay dentro
            ...formulario,
            [name]: value //name relacionado con el valor de cada campo
        })
    }

    // const [nombre, setNombre] = useState("")
    // const[correo, setCorreo] = useState("")
    // const [legajo, setLegajo] = useState("")
    // const [carrera, setCarrera] = useState("")
    
    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true) // para decir q esta guardando

        try {
            const alumno = {
                ...formulario,
                legajo: Number(formulario.legajo) //hace conversión
            }
            const respuesta = await fetch(API_ALUMNOS, {
                method:"POST",
                header: {"Content-Type": "application/json"},
                body: JSON.stringify(alumno)
        })
        if(!respuesta.ok) {
            throw new Error(`No se pudo guardar el alumno. Estado http: ${respuesta.status}`)
        }
        setFormulario({ //resetea el formulario
            legajo: "",
            nombre: "",
            carrera: "",
            correo: ""
        })
        onAlumnoCreado
        } 
        catch (error) { //da el error específico
            console.error("Error al guardar", error)
            setError(error.message || "No se pudo conectar con el servidor")
        } finally {
            setGuardando(false)//queda todo en estado inicial
        }
        // console.log(nombre)
        // console.log(correo)
        // console.log(legajo)
        // console.log(carrera)
    }

    return (
        <> 
        <form onSubmit= {guardar}>
            <label htmlFor="legajo">Legajo</label>
            <input 
            id="legajo"
            name= "nombre"
            value={formulario.legajo} 
            onChange={manejarCambio}
            required
            />
            <label htmlFor="nombre">Nombre</label>
            <input 
            id= "nombre"
            name= "nombre"
            value= {formulario.nombre}
            onChange={manejarCambio}
            required 
            />
             <label htmlFor="carrera">Carrera</label>
            <input 
            id= "carrera"
            name= "carrera"
            value= {formulario.carrera}
            onChange={manejarCambio}
            required 
            />
             <label htmlFor="correo">Correo</label>
            <input 
            id= "correo"
            name= "correo"
            value= {formulario.correo}
            onChange={manejarCambio}
            required 
            />
            <button type="submit" disabled={guardando}>
                {guardando ? "Guardando..." : "Guardar"}
            </button>
            <br />
            {error && <p role="alert"> {error}</p>}
       
        </form>
        </>
    )
}

export default FormularioA