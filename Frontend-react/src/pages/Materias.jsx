import FormularioMateria from '../components/FormularioM'
import { ListaMaterias } from '../components/ListaMaterias'
import { useState } from "react" 

export function Materias(){ 

const [actualizar, setActualizar] = useState(0) 
const [materiaEditar, setMateriaEditar] = useState(null) 

function materiaGuardada() { 
setActualizar(valor => valor + 1)
setMateriaEditar(null) }

function seleccionarMateria(materia) { 
setMateriaEditar(materia) }
return (
 <>
<main>

 <FormularioMateria key={materiaEditar?.codigo ?? "nuevo"} 
 onMateriaGuardada={materiaGuardada} 
 materiaEditar={materiaEditar} 
 onCancelar={() => setMateriaEditar(null)} /> 
 <ListaMaterias actualizar={actualizar} 
 onMateriaGuardada={materiaGuardada} 
 onEditarMateria={seleccionarMateria}/> 

</main>
 </>
)
}
export default Materias