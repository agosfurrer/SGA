
//import EjemploMUI from './components/ejemplos/EjemploMUI'
import { Alumnos } from './pages/Alumnos.jsx'
import FAQ from './pages/FAQ.jsx'
//import SelectorTema from './components/SelectorTema.jsx'
import {Routes, Route} from "react-router-dom" /*importa los componentes Routes y Route de 
react-router-dom para definir las rutas de la aplicación*/
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx'
import Inicio from './pages/Inicio.jsx'
import Docentes from "./pages/Docentes"
import Materias from "./pages/Materias.jsx"

function App() { /*componente principal de la aplicación, maneja las rutas y el layout principal*/

return (
  <> 

  <Routes> 
 
  <Route path='/' element={<LayoutPrincipal />}> 
    <Route index element={<Inicio/>}></Route> 
    <Route path="alumnos" element={<Alumnos/>}></Route> 
    <Route path="docentes" element={<Docentes /> } />
    <Route path="materias" element={<Materias />} />
    <Route path="ayuda" element={<FAQ/>}></Route>
    </Route> 
  {/* <SelectorTema />
  <FAQ />
  <Alumnos /> */}
  </Routes>

  </>
)
}
export default App