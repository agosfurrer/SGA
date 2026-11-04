import {Alert, Box, Button, Textfield, Typography} from "@mui/material"
import {useTheme} from "@mui/material/styles"
import {useState} from "react"

export default function Login() {
    const theme = useTheme()
    const [usuario, setUsuario] = usestate(null)

    const [error, setError] = useState("")
    const [cargando, setCargando] = useState(false) 
    const [mensaje, setMensaje] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login (e) {
        e.preventDefault()
        setError("")
        setCargando(true)
        setUsuario(null)
        setMensaje("")

        try {
            const respuesta = await fetch("http://localhost:3000/lauth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            })
            const datos = await respuesta.json()
            if(!respuesta.ok) {
                throw new Error(datos.mensaje || "No se pudo iniciar sesión")
            }
            setUsuario(datos.usuario)
            setMensaje(datos.mensaje)

            setEmail("")
            setPassword("")

        } 
        catch (error) {
            console.error("Error en login:", error)
            setError(error.mensaje ||"No se pudo conectar con el servidor")
        } 
        finally {
            setCargando(false)
        }
    }
}