import FormularioA from '../components/FormularioA'
import {ListaAlumnos} from '../components/ListaAlumnos'
import { useState } from "react" //manejar el estado de la lista de alumnos y el formulario

export function Alumnos(){//pantalla de alumnos

const [actualizar,setActualizar] = useState(0) //contador, cada vez que se crea un alumno, 
//renderizar la lista de alumnos

const [alumnoEditar, setAlumnoEditar] = useState(null) //para guardar el objeto del alumno que se quiere
// editar, si es null va por POST, si no por PUT

function alumnoCreado() { //función se llama al crear un alumno, y actualiza la lista 

setActualizar(valor => valor + 1) //despues q el valor se actualizó hay q renderizar, para q el useeffect
// cambie y me muestre el estado con los datos 

setAlumnoEditar(null) //resetea el estado para que el formulario se limpie
}

function seleccionarAlumno(alumno) { //para guardar el objeto donde se seleccione el click
setAlumnoEditar(alumno)//se hace click en editar, se guarda el objeto del alumno en estado alumnoEditar
}
//"nuevo" no significa nada, cuando alumnoEditar = null va por POST la app
//si no, se hace una actualización PUT
return (
 <>
<main>

{/*si viene con legajo, lo uso como key, si no pongo "nuevo"*/} 
 <FormularioA key={alumnoEditar?.legajo ?? "nuevo"} /*nuevo es para que cuando se haga click en editar, 
 se renderice el formulario con los datos del alumno a editar*/
 onAlumnoCreado={alumnoCreado} /*se llama a la función para actualizar la lista de alumnos*/
 alumnoEditar={alumnoEditar} 
 onCancelar={() => setAlumnoEditar(null)} /> {/*usuario hace clic en cancel y desaparece todo*/} 
 <ListaAlumnos actualizar={actualizar} /*cada vez que se crea, edite/elimine un alumno, 
 incrementa y vuelve a renderizar la lista de alumnos*/
 onAlumnoCreado={(alumnoCreado)} /*se llama a la función para actualizar la lista de alumnos*/
 onEditarAlumno={seleccionarAlumno}/> {/*use lista para actualizar interface*/ }

 </main>
 </>
)
}