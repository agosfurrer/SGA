import FormularioA from './components/FormularioA'
import {ListaAlumnos} from './components/ListaAlumnos'
import { useState } from "react"

function App() {
  const [actualizar,setActualizar] = useState(0) //es un contador
  const {alumnoEditar, setAlumnoEditar} = useState(null)
  function alumnoCreado() {
  setActualizar(valor => valor + 1) //despues q el valor se actualizó hay q renderizar, para q el useeffect
  // cambie y me muestre el estado con los datos 
  setAlumnoEditar(null)
}

function seleccionarAlumno(alumno) { //para guardar el objeto donde se seleccione el click
  setAlumnoEditar(alumno)
}
  
  return (
    <>
  <main>
    <FormularioA key={alumnoEditar?.legajo ?? "nuevo"}
    onAlumnoCreado={alumnoCreado}
    alumnoEditar={alumnoEditar} />
  <ListaAlumnos actualizar={actualizar} 
  onAlumnoCreado={(alumnoCreado)}
  onEditarAlumno={seleccionarAlumno}/> {/*use lista para actualizar interface*/ }
  </main>
  </>
)
}

export default App