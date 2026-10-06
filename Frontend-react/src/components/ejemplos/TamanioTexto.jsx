import { useState } from "react";

function TamanioTexto () {
    const [tamanio, setTamanio] = useState("20px")

    return (
        <>
        <p style= {{fontSize: tamanio}}>
            Sistema de Gestión Académico
        </p>
        <div style= {{ display: "flex", justifyContent: "center", 
            gap: "20px", color: "yellow", marginTop: "10px"}}>
            <button onClick={() => setTamanio("10px")}>Pequeño</button>
            <button onClick={() => setTamanio("18px")}>Mediano</button>
            <button onClick={() => setTamanio("27px")}>Grande</button>
        </div>
        </>
    )
}
export default TamanioTexto