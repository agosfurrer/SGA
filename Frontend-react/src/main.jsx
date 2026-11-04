import { StrictMode } from 'react'//strictMode ayuda a detectar errores en el desarrollo, no afecta la producción
import { createRoot } from 'react-dom/client'//createRoot forma moderna de renderizar la app, 
//reemplaza ReactDOM.render
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import tema from './tema.js'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'


//ayuda con el renderizado y errores
createRoot(document.getElementById('root')).render( /*renderiza el componente App dentro del 
  ThemeProvider y BrowserRouter, para que la aplicación tenga acceso al tema y a las rutas*/

  <StrictMode>
    <BrowserRouter > 
    <ThemeProvider theme={tema} defaultMode='system'> 
    <CssBaseline /> 
    <App /> 
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
