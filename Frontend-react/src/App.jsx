
//import EjemploMUI from './components/ejemplos/EjemploMUI'
import { Alumnos } from './pages/Alumnos.jsx'
import {FAQ} from './pages/FAQ.jsx'
//import SelectorTema from './components/SelectorTema.jsx'
import {Routes, Route} from "react-router-dom"
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx'
import Inicio from './pages/Inicio.jsx'

function App() {
  

return (
  <>
  <Routes>
    <Route path='/' element={<LayoutPrincipal />}> 
    <Route index elemet={<Inicio/>}></Route>
    <Route path="alumnos" elements={<Alumnos/>}></Route>
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