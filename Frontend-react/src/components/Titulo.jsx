function Titulo ({texto,color}) /*componente Titulo recibe props texto y color, muestra en h1 con el color especifico*/
{
    return (
        <h1 style={{color:color }}>{texto}</h1> 
    )
}

export default Titulo