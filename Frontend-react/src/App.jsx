// import Titulo from "./components/Titulo"
// import {Navbar} from "./components/Navbar" //no se le puede cambiar el nombre en la app
// import {Footer} from "./components/Footer" //si se le puede cambiar el nombre
// import TarjetaAlumno from "./components/TarjetaAlumno"
// import Incrementar from "./components/ejemplos/Incrementar"
// import CambiarTitulo from "./components/ejemplos/CambiarTitulo"
// import { Adivina } from "./components/ejemplos/Adivina"
// import Mensaje from "./components/ejemplos/Mensaje"
// import TamanioTexto from "./components/ejemplos/TamanioTexto"
import FormularioA from "./components/FormularioA"

function App () 
{
  //function mostrarEveto(e){
    //console.log(e.target)//e es la información // target es el elemento q disparó

    //const [nombre, setNombre] = useState("")//estado de inicio

    // function guardar(e) {
    //   e.preventDefault()
    //   console.log("form enviado")

    // }
 
  return ( //necesita estar dentro de un mismo array
    <>  

    {/* <form onSubmit={guardar}>
      <input  /> 
      <button type="submit">Guardar</button>
    </form> */}


              {/* <br />                 
<input value={nombre} onChange={(e) => setNombre(e.target.value)}/>
<p>Hola {nombre}</p> */}

<FormularioA />


    {/* PRUEBA
    <button onClick={mostrarEveto}>Click</button>
    <input onChange={(e) => console.log(e.target.value)} /> {/*value muestra el valor */ } 
      {/* <Titulo texto="Sistema de Gestión Académica"color="skyblue"/> <br />
      <Navbar /> <br /><br />
      <h2>Administración de alumnos</h2> <br />
      <TarjetaAlumno 
      nombre="Ana Nuñez"
      carrera="Programación"
      edad ="20"/>
      <br /> 
       <TarjetaAlumno 
      nombre="Luna Gomez"
      carrera="Programación" 
      edad= "32"/> 
      <br /><br />
      <Footer /> */}
      {/* <Incrementar />
      <CambiarTitulo />
      <Adivina />
      <Mensaje /> <br />
      <TamanioTexto /> */}

    </>
  )
}

export default App