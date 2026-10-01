import { useState } from "react";

function CambiarTitulo () {
    const [titulo, setTitulo] = useState("Inicio")

    return (
        <>
        <h2>{titulo}</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
            <button onClick={() => setTitulo("Alumnos")} style={{
                marginRight: "10px", width: "100px", height: "100px", color: "skyblue"}}>Alumnos</button>
            <button onClick={() => setTitulo("Docentes")} style={{
                marginRight: "10px", width: "100px", height: "100px", color: "skyblue", padding: "5px"}}>Docentes</button>
        </div>
        </>
    )
}
export default CambiarTitulo