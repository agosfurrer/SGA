// const docentes = [
//     {
//         id: 1,
//         nombre: "Lucrecia Gómez",
//         especialidad: "Lengua",
//         correo: "lucre@hotmail.com"
//     }
// ]


//para docentes
const formulario = document.querySelector("#formDocente")
const mensaje = document.querySelector("#mensaje")
let docentesEditandoId = null;
const listaDocentes = document.querySelector("#listaDocentes")

formulario.addEventListener("submit", function(event){
    event.preventDefault(); // evita que se recargue

    const nombre = document.querySelector("#nombre").value.trim()
    const especialidad = document.querySelector("#especialidad").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if (nombre === "" || especialidad === "" || correo === "") {
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

    const docentes = obtenerDocente()

    if (docentesEditandoId === null) {
        const docente = {
            id: Date.now(),
            nombre: nombre,
            especialidad: especialidad,
            correo: correo
        }

        docentes.push(docente)
        mostrarMensaje("Docente guardado correctamente", "mje-exito")

    } else {
        const docente = docentes.find(docente => docente.id === docentesEditandoId)
        docente.nombre = nombre
        docente.especialidad = especialidad
        docente.correo = correo
        docentesEditandoId = null
        formulario.querySelector("button").textContent = "Guardar docente"

        mostrarMensaje("Docente actualizado correctamente", "mje-exito")
    }

    //localStorage.setItem("docentes", JSON.stringify(docentes))
    mostrarDocentes(docentes)
    formulario.reset()
});

function obtenerDocente() {
    return obtenerDatos("docentes")
    }

// function mostrarMensaje(texto, clase) {
//     mensaje.textContent = texto;
//     mensaje.className = `mensaje ${clase}`
//     mensaje.style.display = "block"
//     setTimeout(() => {
//         mensaje.style.display = "none"
//     }, 3000);
// }

function mostrarDocentes(docentes) {
    listaDocentes.innerHTML = ""
    for (const docente of docentes) {
        listaDocentes.innerHTML += `
        <tr> 
            <td> ${docente.id}</td>
            <td> ${docente.nombre}</td>
            <td> ${docente.especialidad}</td>
            <td> ${docente.correo}</td>
            <td> 
               <button class="btn-editar" data-id="${docente.id}"> Editar </button>
               <button class="btn-eliminar" data-id="${docente.id}"> Eliminar </button> 
            </td>
        </tr> 
        `; 
    }
}

function eliminarDocente(id) {
    const docentes = obtenerDocente();
    const docentesActualizados = docentes.filter(
        docente => docente.id !== id
    );
    localStorage.setItem("docentes", JSON.stringify(docentesActualizados))
    mostrarDocentes(docentesActualizados)
    mostrarMensaje("Docente eliminado correctamente", "mje-exito")
}

listaDocentes.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
        const id = Number(e.target.dataset.id)
        eliminarDocente(id)
    }
    if (e.target.classList.contains("btn-editar")) {
        const id = Number(e.target.dataset.id)
        editarDocente(id);
    }
})

function editarDocente(id) {
    const docentes = obtenerDocente()
    const docente = docentes.find(docente => docente.id === id)
    document.querySelector("#nombre").value = docente.nombre; // refresca input
    document.querySelector("#especialidad").value = docente.especialidad;
    document.querySelector("#correo").value = docente.correo;
    docentesEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar docente"
}

const docentes = obtenerDocente() 
mostrarDocentes(docentes)