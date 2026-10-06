import { useState } from "react";

function FormularioA() {
    const [nombre, setNombre] = useState("")
    const[correo, setCorreo] = useState("")
    const [legajo, setLegajo] = useState("")
    const [carrera, setCarrera] = useState("")
    
    function guardar(e) {
        e.preventDefault()
        console.log(nombre)
        console.log(correo)
        console.log(legajo)
        console.log(carrera)
    }

    return (
        <> 
        <form onSubmit= {guardar}>
            <input value={legajo} 
            onChange={(e) => setLegajo(e.target.value)}/>
        <input value={nombre} 
        onChange={(e) => setNombre(e.target.value)}/>
        <input value={correo} 
        onChange={(e) => setCorreo(e.target.value)}/>
        <input value={carrera} 
        onChange={(e) => setCarrera(e.target.value)}/> <br />
        <button type="submit">Guardar</button>
        </form>
        <h3>Legajo: {legajo}</h3>
        <h3>Nombre: {nombre}</h3>
        <h3>Correo: {correo}</h3>
        <h3>Carrera: {carrera}</h3>
        </>
    )
}

export default FormularioA