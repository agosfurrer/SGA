import { useState } from "react";

export function Adivina () {
    const [seleccion, setSeleccion] = useState("")
    const [resultado, setResultado] = useState("")
    const [colorResultado, setColor] = useState("")
    const [ganadas, setGanadas] =useState(0)
    const [perdidas, setPerdidas] = useState(0)
    const [partidas, setPartidas] = useState(0)

    function sortear () {
        const ganador = Math.floor(Math.random() * 10) + 1
        const elegido = Number(seleccion)

        setPartidas(partidas + 1)

        if (seleccion === " " ){
            setResultado("Ingresa un número")
            setColor("blue")
            return 
        }
        if (elegido < 1 || elegido > 10) {
            setResultado("Ingresa un número entre 1 y 10")
            setColor("blue")
            return
        }
        if (elegido === ganador){
            setResultado(`Ganaste. Salió ${ganador} y elegiste ${elegido}`)
            setColor("green")
            setGanadas(ganadas + 1)
        } else {
            setResultado(`Perdiste. Salió ${ganador} y elegiste ${elegido}`)
            setColor("red")
            setPerdidas(perdidas + 1)
        }
    }
    return (
        <>
        <h2>Adivina el número</h2>
        <input type="number" value={seleccion} 
        onChange={(e) => setSeleccion(e.target.value)} /> <br />
            <button onClick={sortear}>Adivinar</button>
            <p style= {{color: colorResultado}}>{resultado}</p> //color aplica el colorResultado
            <hr />
            <p>Partidas jugadas:{partidas} </p>
            <p>Partidas ganadas:{ganadas} </p>
            <p>Partidas perdidas:{perdidas} </p>
        </>
    )
} 