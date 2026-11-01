
//import EjemploMUI from './components/ejemplos/EjemploMUI'
import { Alumnos } from './pages/Alumnos.jsx'
import FAQ from './pages/FAQ.jsx'
//import SelectorTema from './components/SelectorTema.jsx'
import {Routes, Route} from "react-router-dom" /*importa los componentes Routes y Route de 
react-router-dom para definir las rutas de la aplicación*/
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx'
import Inicio from './pages/Inicio.jsx'
import Docentes from "./pages/Docentes"

function App() { /*componente principal de la aplicación, maneja las rutas y el layout principal*/

return (
  <> /*agrupa los elementos sin agregar un nodo extra al DOM*/

  <Routes> /*define las rutas de la aplicación, cada ruta tiene un path y un 
    elemento que se renderiza cuando se accede a esa ruta*/
 
  <Route path='/' element={<LayoutPrincipal />}> /*ruta principal, renderiza el layout principal*/

    <Route index element={<Inicio/>}></Route> /*ruta de inicio, renderiza la pantalla de inicio*/
    <Route path="alumnos" element={<Alumnos/>}></Route> /*ruta de alumnos, renderiza la pantalla de alumnos*/
    <Route path="docentes" element={<Docentes /> } />
    <Route path="ayuda" element={<FAQ/>}></Route> /*ruta de ayuda, renderiza la pantalla de ayuda*/
    </Route> 
  {/* <SelectorTema />
  <FAQ />
  <Alumnos /> */}
  </Routes>

  </>
)
}
export default App