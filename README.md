# Sistema de Gestión Académica (SGA)



Proyecto desarrollado durante la materia Programación IV.



## Descripción



El Sistema de Gestión Académica (SGA) es una aplicación web que permitirá administrar alumnos, docentes, cursos y materias.



Durante el desarrollo del proyecto se incorporarán progresivamente nuevas tecnologías y funcionalidades.



## Objetivos



- Gestionar alumnos.

- Gestionar docentes.

- Gestionar cursos.

- Gestionar materias.

- Implementar autenticación de usuarios.

- Consumir una API REST.

- Persistir la información en MongoDB.



## Tecnologías



Actualmente:



- HTML5
- JavaScript
- CSS3
- Node.js
- Express
- MongoDB

Próximamente:


- React



## Estado del proyecto

🚧 En desarrollo.

- Versión:
Clase 12 Estructura actual
SGA/
frontend
 |-- index.html
 |-- alumnos.html
 |-- docentes.html
 |
 |-- CSS/
      |-- estilos.css
 |
 |-- JS/
      |-- alumnos.js
      |-- docentes.js 
backend

# Estado actual
- Página de inicio y navegación entre módulos
- Módulos alumnos/docentes
- CRUD alumnos/docentes
- Validaciones de formularios
- Persistencia mediante localStorage
- Organización del código y refactorización
- Separación inicial entre frontend y backend
- Implementación de validaciones para los datos recibidos para los datos recibidos mediante req.body
- Uso de status 400 para datos inválidos
- Status 404 para alumno no encotrado
- Status 201 para alumno registrar nuevo alumno
- Manejo básico de errores en las operaciones del CRUD
- Instalación de Mongoose
- Creación de la conexión con MongoDB en config database.js
- Creación del esquema y modelo alumnos
- Reemplazo del array en memoria por una coleciión de mongoDB
- Modificación de GET alumnos para consulta MongoDB mediante mongoose
- Prueba de la API con datos almacenados en MongoDB
- 

## Almacenamiento
localStorage
JSON.stringify()
JSON:parse()
MongoDB

## Autor



Furrer Agostina



Programación IV