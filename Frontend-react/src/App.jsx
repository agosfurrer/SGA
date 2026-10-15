import FormularioA from './components/FormularioA'
import {ListaAlumnos} from './components/ListaAlumnos'
import { useState } from "react"

function App() {
  const [actualizar,setActualizar] = useState(0) //es un contador
  function alumnoCreado() {
  setActualizar(valor => valor + 1) //despues q el valor se actualizó hay q renderizar
}
  
  return (
    <>
  <main>
  <FormularioA onAlumnoCreado={alumnoCreado} />
  <ListaAlumnos actualizar={actualizar} /> 

  </main>
  </>
)
}

export default App