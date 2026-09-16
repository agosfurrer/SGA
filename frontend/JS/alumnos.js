// const alumnos = [
//     {
//         id: 1,
//         nombre: "Inti"
//     },
//     {
//         id: 2,
//         nombre: "Lucy"
//     }
// ];

// function obtenerAlumno() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(alumnos)
//         }, 3000);
//     })
// }
// async function iniciar() {
//     const datos = await obtenerAlumno()
//     console.table(datos)
// }
// iniciar()

//crear obtenerMaterias() 
//crear obtenerDocentes()
//mostrar datos con async(await)

// const materias = [
//     {
//         nombre: "Lengua",
//         horarios: "Lunes y Jueves"
//     },
//     {
//         nombre: "TICS",
//         horarios: "Martes y Miércoles"
//     }
// ]


// function obtenerMaterias() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(materias)
//         }, 3500)
//     })
// }
// async function mostrarM() {
//     const materias = await obtenerMaterias()
//     console.table(materias)
// }

// const docentes = [
//     {
//         nombre: "Maria Rita Alvarez",
//         materia: "Taller"
//     },
//     {
//         nombre: "Ana Maria Fernandez",
//         materia: "Software y Hardware"
//     }
// ] 

// function obtenerDocentes() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(docentes)
//         }, 3000)
//     })
// }

// async function mostrarD() {
//     const profes = await obtenerDocentes()
//     console.table(profes)
// }

// mostrarM()
// mostrarD()

//con server
// async function obtenerAlumno() {
//    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")//puedo indicar cuantos id muestra
//     const alumnos = await respuesta.json() 
//     return alumnos
// }
// function mostrarAlumnos(alumnos) {
//     //console.table(alumnos)

// console.log(typeof alumnos)
// localStorage.setItem("alumnos", JSON.stringify(alumnos))
// const datos = localStorage.getItem("alumnos")
// console.log(typeof datos)
// console.log(datos)
// const alumRecu = JSON.parse(datos)
// console.log(typeof alumRecu)
// console.table(alumRecu)

     // console.log(alumnos[0].name)
    // for (const alumno of alumnos) {
    //     console.log(alumno.id, alumno.name, alumno.email)
    // }
// }
// async function iniciar() {
//     const alumnos = await obtenerAlumno()
//     mostrarAlumnos(alumnos)
// }
// iniciar()





// /post
// /comments
// id-titulo-usuario

// async function obtenerComments() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments")//puedo indicar cuantos id muestra
//     const comments = await respuesta.json() 
//     return comments
// }
// function mostrarComments(comments) {
//     //console.table(post)
//     //console.log(alumnos[0].name)
//     for (const co of comments) {
//         console.log(co.id, co.name, co.email)
//     }
// }
// async function iniciarComments() {
//     const comments = await obtenerComments()
//     mostrarComments(comments)
// }
// iniciarComments()

// ---------------------------- post
// async function obtenerPost() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")//puedo indicar cuantos id muestra
//     const post = await respuesta.json() 
//     return post
// }
// function mostrarPost(post) {
//     //console.table(post)
//     //console.log(alumnos[0].name)
//     for (const po of post) {
//         console.log(po.id, po.title, po.userId)
//     }
// }
// async function iniciarPost() {
//     const post = await obtenerPost()
//     mostrarPost(post)
// }
// iniciarPost()



// para alumnos.js

const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")
let alumnoEditandoLegajo = null
let alumnoEditar = null
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display = "none"
const btnGuardar = document.querySelector("#btnGuardar")
const API_ALUMNOS = "http://localhost:3000/alumnos"


formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const legajo = document.querySelector("#legajo").value.trim()
    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if (legajo === "" || nombre === "" || carrera === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }

    if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo electrónico válido", "mje-error")
        return
    }

    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
        return
    }




//POST xq debemos hacer un nuevo alumno
    if (alumnoEditandoLegajo === null) { // si viene nulo es un documento nuevo
        const alumno = {
            legajo: Number(legajo),
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }
        const respuesta = await fetch(API_ALUMNOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alumno)
        })

        if(!respuesta.ok){ //respuesta no ok
            mostrarMensaje("No se pudo guardar el alumno", "mje-error")
            return 
        }
        
        
        
        
        mostrarMensaje("Alumno guardado correctamente", "mje-exito")
    } else { // hacemos PUT
        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }
        
        if (JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
            mostrarMensaje("No se realizaron cambios", "mje-adv")
            return
        }
        
        const respuesta = await fetch(`${API_ALUMNOS}/${alumnoEditandoLegajo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application"
            },
            body: JSON.stringify({
            nombre: nombre,
            carrera: carrera,
            correo:correo
        })
        }) 
        if(!respuesta.ok) {
            mostrarMensaje("No se pudo actualizar el alumno", "mje-error")
            return
        }
        alumnoEditandoLegajo = null
        alumnoEditar = null
        btnGuardar.textContent = "Guardar Alumno"
        document.querySelector("#legajo").disabled = false

        mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
    }

    // const alumnosActualizados = await obtenerAlumnos() //para q muestre la tabla con info nueva
    // mostraAlumnos(alumnosActualizados)
      await actualizarListaAlumnos()
    formulario.reset()
});


async function obtenerAlumnos() {
    const respuesta = await fetch(API_ALUMNOS)
    const alumnos = await respuesta.json()
    return alumnos
}



function mostraAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.legajo}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button 
                class="btn-editar" 
                data-legajo="${alumno.legajo}"
                title="Editar alumno">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                class="btn-eliminar" 
                data-legajo="${alumno.legajo}"
                title="Eliminar alumno">
                <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}
async function eliminarAlumno(legajo) {
    const respuesta = await fetch(`${API_ALUMNOS}/ ${legajo}`, {
        method: "DELETE"
    })

    if(!respuesta.ok) {
        mostrarMensaje("No se pudo eliminar el alumno", "mje-error")
        return
    }

    if (alumnoEditandoLegajo === legajo){
        formulario.reset()
        alumnoEditar = null
        alumnoEditandoLegajo = null
        btnGuardar.textContent = "Guardar alumno"
        document.querySelector("#legajo").disabled = false
        btnCancelar.style.display = "none"
    }
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")

    await actualizarListaAlumnos()
}

async function actualizarListaAlumnos () {
    const alumnos = await obtenerAlumnos()
    mostraAlumnos(alumnos)
}

listaAlumnos.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")
    if (boton_el) {
        const legajo = Number(boton_el.dataset.legajo)
        const confirmar = confirm("¿Está seguro de eliminar este alumno?")
        if (confirmar) {
        eliminarAlumno(legajo)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const legajo = Number(boton_ed.dataset.legajo)
        editarAlumno(legajo)
    }
})

async function editarAlumno(legajo) {
    const alumnos = await obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.legajo === legajo)
    if (!alumno) {
        mostrarMensaje("Alumno no encontrado", "mje-error")
        return // para que no deje continuar con la función
    }
    document.querySelector("#legajo").value = alumno.legajo;
    document.querySelector("#legajo").disabled = true // para deshabilitar para q no pueda hacer clic dentro 
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;

    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }

    alumnoEditandoLegajo = alumno.legajo;
    btnCancelar.style.display ="inline-block"

    btnGuardar.textContent = "Actualizar Alumno"
    document.querySelector("#nombre").focus()
}

function cancelarEdicion(){
    formulario.reset()
    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar Alumno"
    document.querySelector("#legajo").disabled = false // lo deja habilitado
    btnCancelar.style.display = "none"
    document.querySelector("#legajo").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion)

async function iniciar(){
    await actualizarListaAlumnos()  
}

iniciar()