
// console.log("Inicio")
// setTimeout(() => {
//     console.log("Buscando alumno...")
// }, 3000) //3seg espera de resp
// console.log("Fin")
// // -----------------

// function saludar() {
//     console.log("Hola")
// }
// function ejecutar(funcion) {
//     funcion();
// }
// ejecutar(saludar)//callback


// function despedirse() {
//     console.log("Hasta luego")
// }
// setTimeout(despedirse, 3000)//callback
// //esperas
// setTimeout(() => {
//     console.log("Buscando docentes")
// }, 2000);

// setTimeout(() => {
//     console.log("Buscando materias")
// }, 4000);

// setTimeout(() => {
//     console.log("Buscando cursos")
// }, 1000);

// console.log("Abriendo SGA")
// setTimeout(() => {
//     console.log("Alumnos cargados")
// }, 3000);

// console.log("Usuario puede seguir")

//en 5 seg de espera aparezca "Lista recibida" 
// Primero solicitando lista de alumnos
//segundo: el programa sigue ejecutandose

// console.log("Solicitando lista de alumnos")
// setTimeout(() => {
//     console.log("Lista recibida")
// }, 5000)
// console.log("El programa sigue ejecutandose...")

// function obtenerAlumnos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Ya tengo el arreglo")
//             resolve(["Ana", "Inti", "Lucy"])
//         }, 3000);
//     })
// };
// obtenerAlumnos().then((alumnos) => {
//     console.log(alumnos)
// });


// async function iniciar() {
//     const alumnos = await obtenerAlumnos()
//     console.log(alumnos)
// }
// iniciar()

//función asincrona que funciona igual q la de abajo
// login(usuario).then((usuario) => {
//     return obtenerCursos(usuario.id)
// })
// .then((cursos) => {
//     return obtenerNotas(cursos)
// })
// .then((notas) => {
//     console.log(notas)
// })
// .catch((error) => {
//     console.log(error)
// })
//casi no se usa el then, reemplazado por el "await"

//funcion asincrona -- otra forma para atrapar errores
// async function mostrarNotas() {
//     try {
//     const usuario = await login(usuario)
//     const cursos = await obtenerCursos(usuario.id)
//     const notas = await obtenerNotas(cursos)
//     console.log(notas)
//     }
//     catch(error) {
//         console.log()
//     }
// }


//simular consulta clima
// function obtenerClima() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("22°c - Soleado")
//         }, 2000)
//     })
// }

// //con then()
// obtenerClima().then((clima) => {
//     console.log(clima)
// });

// //async(await)
// async function mostrarclima() {
//     const clima = await obtenerClima()
//     console.log(clima)
// }
// mostrarclima()

//saldo
// function consultarSaldo() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(127000)
//         }, 3000)
//     })
// }

// async function mostrarSaldo() {
//     const saldo = await consultarSaldo()
//     console.log(`Su saldo es: $${saldo}`)
// }
// mostrarSaldo()

//funcion login
// function iniciarSesion() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Bienvenida Ago")
//         }, 2500)
//     })
// }
// async function mostrarInicio() {
//     const mensaje = await iniciarSesion()
//     console.log(mensaje)
// }
// mostrarInicio()

// function obtenerUsuario() {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 nombre: Ago,
//                 edad:20
//             })
//         }, 3000);
//     })
// }
// async function mostrarUsuario() {
//     console.log("Consultando usuario...")
//     const usuario = await obtenerUsuario()
//     console.log(usuario)
// }
// mostrarUsuario()


async function prueba () {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(respuesta);
}
prueba()
