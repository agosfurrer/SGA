import { useState } from "react"


function Incrementar (){
    // let contador = 0
    const [contador, setContador] = useState (0) 
    const [mostrar, setMostrar] = useState(false)

    function incremento (){
        // contador ++
        setContador(contador +1)
    
        // console.log(contador)
    }
    function decremento() {
        if (contador > 0)
        setContador(contador - 1)
    }
    return (
        <>
        <h1>Contador: {contador}</h1>
        <div style={{display: "flex", justifyContent: "center", gap: "17px"}}>
            <button onClick={incremento} style={{
                width: "50px", 
                height: "50px", 
                fontSize: "31px"
            }}>+</button> 
            <button onClick={decremento} style={{
                width: "50px", 
                height: "50px", 
                fontSize: "31px"
            }}>-</button> 
        </div> <br />
        <button onClick={() => setMostrar(!mostrar)}>Mostrar / Ocultar</button> 
        {mostrar && <p>Información visible</p>}
        </>
    ) //!mostrar es en true
}

export default Incrementar