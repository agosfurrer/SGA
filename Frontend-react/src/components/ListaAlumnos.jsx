import { useEffect, useState } from "react"
const API_ALUMNOS = "http://localhost:3000/alumnos"

export function ListaAlumnos () {
    const [alumnos,setAlumnos] = useState([])
    useEffect(() => { //no se puede hacer asincrónico use-effect
        async function cargarAlumnos() {
            try {
            const respuesta = await fetch(API_ALUMNOS)
            const datos = await respuesta.json()
            setAlumnos(datos)
            if(!respuesta.ok) {
                throw new Error("no se pudo obtener la lista", respuesta.status)
            }
        }
        catch(error) {
            console.error("Error de conexión", error)
        }
         }
        cargarAlumnos()
    }, [])


    return (
        <>
        <h2>Alumnos</h2>
        {alumnos.map(alumno => (
            <p key={alumno.legajo}>
                {alumno.legajo} - {alumno.nombre} - {alumno.carrera}
            </p>
        ))}
        </>

    )
    
}