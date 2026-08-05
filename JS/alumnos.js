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

const materias = [
    {
        nombre: "Lengua",
        horarios: "Lunes y Jueves"
    },
    {
        nombre: "TICS",
        horarios: "Martes y Miércoles"
    }
]


function obtenerMaterias() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(materias)
        }, 3500)
    })
}
async function mostrarM() {
    const materias = await obtenerMaterias()
    console.table(materias)
}

const docentes = [
    {
        nombre: "Maria Rita Alvarez",
        materia: "Taller"
    },
    {
        nombre: "Ana Maria Fernandez",
        materia: "Software y Hardware"
    }
] 

function obtenerDocentes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(docentes)
        }, 3000)
    })
}

async function mostrarD() {
    const profes = await obtenerDocentes()
    console.table(profes)
}

mostrarM()
mostrarD()