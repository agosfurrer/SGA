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
const mensaje = document.querySelector("#mensajeD")
let docentesEditandoId = null;
const listaAlumnos = document.querySelector("#listaDocentes")

formulario.addEventListener("submit", function(event){
    event.preventDefault();//evita q se recargue

const nombre = document.querySelector("#nombreD").value.trim()
const especialidad = document.querySelector("#especialidad").value.trim()
const correo = document.querySelector("#correoD").value.trim()


});