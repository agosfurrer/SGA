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



// para el index

const formulario = document.querySelector("#formAlumno")
const mensaje = document.querySelector("#mensaje")
let alumnosEditandoId = null;
const listaAlumnos = document.querySelector("#listaAlumnos")

formulario.addEventListener("submit", function(event){
    event.preventDefault();//evita q se recargue

const nombre = document.querySelector("#nombre").value.trim()
const carrera = document.querySelector("#carrera").value.trim()
const correo = document.querySelector("#correo").value.trim()

if (nombre === "" || carrera === "" || correo === "") {
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

const alumnos = obtenerAlumno()
// console.log(nombre, carrera, correo)

if (alumnosEditandoId === null) {
    const alumno = {
    id: Date.now(),
    nombre: nombre,
    carrera: carrera,
    correo: correo
}

alumnos.push(alumno)
mostrarMensaje("Alumno guardado correctamente", "mje-exito")

} 
else {
    const alumno = alumnos.find(alumno => alumno.id === alumnosEditandoId)
    alumno.nombre = nombre
    alumno.carrera = carrera
    alumno.correo = correo
    alumnosEditandoId = null
    formulario.querySelector("button").textContent = "Guardar alumno"

    mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
}

localStorage.setItem("alumnos", JSON.stringify(alumnos))
mostrarAlumnos(alumnos)
formulario.reset()

});

function obtenerAlumno () {
    const datos = localStorage.getItem("alumnos")
    if (datos) {
        return JSON.parse(datos)
    }
    return [] //evita q devuelva nulo
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo
    setTimeout(() => {
        mensaje.textContent = " ";
        mensaje.className = "oculto"
    }, 3000);
}


function mostrarAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
       <tr> 
            <td> ${alumno.id}</td>
            <td> ${alumno.nombre}</td>
            <td> ${alumno.carrera}</td>
            <td> ${alumno.correo}</td>
            <td> 
               <button class="btn-editar" data-id="${alumno.id}"> Editar </button>
               <button class="btn-eliminar" data-id="${alumno.id}"> Eliminar </button> 
            </td>
        </tr> 
       `; 
    }
}

function eliminarAlumno(id) {
    const alumnos = obtenerAlumno();
    const alumnosActualizados = alumnos.filter(
        alumno => alumno.id !== id
    );
    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    mostrarAlumnos(alumnosActualizados)
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}

listaAlumnos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
        const id = Number(e.target.dataset.id)
        eliminarAlumno(id)
    }
    if (e.target.classList.contains("btn-editar")) {
        const id = Number(e.target.dataset.id)
        editarAlumno(id);
    }
})

function editarAlumno(id) {
    const alumnos = obtenerAlumno()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;//refresca input
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnosEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar alumno"
}

const alumnos = obtenerAlumno() 
mostrarAlumnos(alumnos)