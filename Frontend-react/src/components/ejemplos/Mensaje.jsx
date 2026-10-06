import { useState } from "react";

function Mensaje () { //componente de react
    const [mensaje, setMensaje] = useState("Hola Alumnos")


    function cambiarMensaje(){
        setMensaje(mensaje==="Hola alumnos"
            ?"Bienvenido a programacion 4"
            : "Hola Alumnos"
        )
    }

    return ( //formato salida lo que vemos
        <>
        <h2>{mensaje}</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
            <button onClick={cambiarMensaje} style={{
                marginRight: "10px", width: "100px", height: "100px", color: "skyblue"}}>Cambiar mensaje</button>
            </div>
        </>
    )
}
export default Mensaje