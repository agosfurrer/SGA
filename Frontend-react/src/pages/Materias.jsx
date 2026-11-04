import { useState } from "react"
import Box from "@mui/material/Box"
import FormularioMateria from "../components/FormularioMateria"
import { ListaMaterias } from "../components/ListaMaterias"

export default function Materias() {
    const [actualizar, setActualizar] = useState(0)
    const [materiaEditar, setMateriaEditar] = useState(null)

    function materiaGuardada() {
        setActualizar(valor => valor + 1)
        setMateriaEditar(null)
    }

    function seleccionarMateria(materia) {
        setMateriaEditar(materia)
    }

    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "minmax(300px, 0.85fr) minmax(0, 1.15fr)" }, gap: 3, alignItems: "start" }}>
            <FormularioMateria
                materiaEditar={materiaEditar}
                onMateriaGuardada={materiaGuardada}
                onCancelar={() => setMateriaEditar(null)}
            />
            <ListaMaterias
                actualizar={actualizar}
                onMateriaGuardada={materiaGuardada}
                onEditarMateria={seleccionarMateria}
            />
        </Box>
    )
}