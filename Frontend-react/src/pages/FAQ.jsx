import * as React from 'react'; // usar sus funciones básicas
import Accordion from '@mui/material/Accordion'; // Traemos la cajita desplegable de Material UI
import AccordionSummary from '@mui/material/AccordionSummary'; // Traemos el título de la caja (lo que se ve siempre)
import AccordionDetails from '@mui/material/AccordionDetails'; // Traemos el contenido escondido (lo que aparece al hacer clic)
import Typography from '@mui/material/Typography'; // Traemos el componente para escribir textos y títulos bonitos
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Traemos la flechita que apunta hacia abajo
import Paper from '@mui/material/Paper'; // Traemos una "hoja/tarjeta" blanca con sombra para envolver todo

export default function FAQ() { // Creamos la pantalla de Preguntas Frecuentes
  const id = React.useId(); // Crea código único para que los desplegables no se confundan entre sí
  return ( // Dibujamos lo que se va a ver en pantalla
    <div> {/* Contenedor principal */}
        <Paper elevation={2} // Usamos la tarjeta blanca y le damos un toque de sombra (nivel 2)
        sx={{p:3, // Le damos espacio por dentro para que nada quede pegado a los bordes
            border:2, // Le ponemos un borde fino alrededor
            borderColor:"divider", // Le damos el color de borde estándar
            borderRadius:3 // Redondeamos las esquinas de la tarjeta
        }}>
            <Typography variant="h5" sx={{mb:1}}>Preguntas frecuentes</Typography> {/* Título principal en tamaño grande */}
            <Typography variant='body2' color='text.secondary' sx={{mb:2}}>Ayuda para utilizar el sistema de gestión académica </Typography> {/* Texto de bajada con letra más clara */}
      
      <Accordion /* Primer bloque desplegable */>
        <AccordionSummary /* La solapa que se toca para abrir */
          expandIcon={<ArrowDropDownIcon />} /* Le ponemos la flechita para abajo a la derecha */
          aria-controls={`${id}-panel1-content`} /* Identificador para que la app sepa qué texto abre */
          id={`${id}-panel1-header`} /* Nombre de esta solapa */
        >
          <Typography component="span">¿Cómo se registra un alumno</Typography> {/* La primera pregunta */}
        </AccordionSummary>
        <AccordionDetails /* Lo que está adentro guardado */>
          <Typography /* La respuesta */>
            Desde el formulario del alumno completando el legajo, nombre, carrera y correo. Luego seleccioná guardar
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion /* Segundo bloque desplegable */>
        <AccordionSummary /* Solapa de la segunda pregunta */
          expandIcon={<ArrowDropDownIcon />} /* La flechita */
          aria-controls={`${id}-panel2-content`} /* Identificador del texto 2 */
          id={`${id}-panel2-header`} /* Nombre de la solapa 2 */
        >
          <Typography component="span">¿Cómo puedo modificar los datos de un alumno?</Typography> {/* Pregunta 2 */}
        </AccordionSummary>
        <AccordionDetails /* Texto guardado 2 */>
          <Typography /* Respuesta 2 */>
            Buscá el alumno en el listado y seleccioná Editar. 
            El formulario se completará con sus datos para que puedas modificarlos.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion /* Tercer bloque desplegable */>
        <AccordionSummary /* Solapa de la tercera pregunta */
          expandIcon={<ArrowDropDownIcon />} /* La flechita */
          aria-controls={`${id}-panel2-content`} /* Identificador del texto 3 */
          id={`${id}-panel2-header`} /* Nombre de la solapa 3 */
        >
          <Typography component="span">¿Puedo eliminar un alumno?</Typography> {/* Pregunta 3 */}
        </AccordionSummary>
        <AccordionDetails /* Texto guardado 3 */>
          <Typography /* Respuesta 3 */>
            Sí, Desde el listado, seleccioná Eliminar. Antes verificá que estés trabajando con el alumno correcto.
          </Typography>
        </AccordionDetails>
      </Accordion>

      </Paper> {/* Cierre de la tarjeta blanca */}
    </div> /* Cierre del contenedor */
  );
}