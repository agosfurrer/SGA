// import Titulo from "./components/Titulo"
// import {Navbar} from "./components/Navbar" //no se le puede cambiar el nombre en la app
// import {Footer} from "./components/Footer" //si se le puede cambiar el nombre
// import TarjetaAlumno from "./components/TarjetaAlumno"
import Incrementar from "./components/ejemplos/Incrementar"
import CambiarTitulo from "./components/ejemplos/CambiarTitulo"
import { Adivina } from "./components/ejemplos/Adivina"

function App () 
{
  return ( //necesita estar dentro de un mismo array
    <>  
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
      <Incrementar />
      <CambiarTitulo />
      <Adivina />
    </>
  )
}

export default App