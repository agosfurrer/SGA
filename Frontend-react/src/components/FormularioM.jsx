import { useState } from "react"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const API_MATERIAS = "http://localhost:3000/materias"

function FormularioMateria({ onMateriaGuardada, materiaEditar, onCancelar }) {
    const [formulario, setFormulario] = useState({
        codigo: materiaEditar?.codigo ?? "",
        nombre: materiaEditar?.nombre ?? "",
        descripcion: materiaEditar?.descripcion ?? "",
        cargaHoraria: String(materiaEditar?.cargaHoraria ?? ""),
        estado: materiaEditar?.estado ?? "activa"
    })
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    function manejarCambio(e) {
        const { name, value } = e.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true)

        if (!formulario.codigo || !formulario.nombre || formulario.cargaHoraria === "" || !formulario.estado) {
            setError("Todos los campos obligatorios deben estar completos.")
            setGuardando(false)
            return
        }

        const carga = Number(formulario.cargaHoraria)
        if (isNaN(carga) || carga <= 0 || carga % 1 !== 0) {
            setError("La carga horaria debe ser un número entero mayor a cero.")
            setGuardando(false)
            return
        }
        const materia = {
            ...formulario,
            cargaHoraria: carga
        }
        const editando = Boolean(materiaEditar)
        const url = editando 
            ? `${API_MATERIAS}/${materiaEditar.codigo}`
            : API_MATERIAS
        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(materia)
            })
            const resultado = await respuesta.json().catch(() => ({}))

            if (!respuesta.ok) {
                throw new Error(resultado.mensaje || "No se pudo guardar la materia.")
            }

            setFormulario({
                codigo: "",
                nombre: "",
                descripcion: "",
                cargaHoraria: "",
                estado: "activa"
            })
            onMateriaGuardada()
        } catch (error) {
            setError(error.message || "No se pudo conectar con el servidor.")
        } finally {
            setGuardando(false)
        }
    }

    function cancelar(){
        onCancelar()
    }

    return (
        <Paper
            component="section"
            elevation={0}
            sx={{
                p: { xs: 2.5, sm: 3.5 },
                mb: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 4,
                bgcolor: "background.paper"
            }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2.5, fontWeight: 700 }}>
                {materiaEditar ? "Editar materia" : "Nueva Materia"}
            </Typography>
            <Box
                component="form"
                onSubmit={guardar}
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                    gap: 2
                }}>
                <TextField
                    id="codigo"
                    name="codigo"
                    label="Código"
                    value={formulario.codigo}
                    onChange={manejarCambio}
                    required
                    fullWidth/>
                <TextField
                    id="nombre"
                    name="nombre"
                    label="Nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    required
                    fullWidth/>
                <TextField
                    id="descripcion"
                    name="descripcion"
                    label="Descripción"
                    value={formulario.descripcion}
                    onChange={manejarCambio}
                    multiline
                    minRows={2}
                    fullWidth
                    sx={{ gridColumn: { sm: "1 / -1" } }}/>
                <TextField
                    id="cargaHoraria"
                    name="cargaHoraria"
                    label="Carga horaria"
                    type="number"
                    value={formulario.cargaHoraria}
                    onChange={manejarCambio}
                    required
                    fullWidth/>
                <TextField
                    id="estado"
                    name="estado"
                    label="Estado"
                    select
                    value={formulario.estado}
                    onChange={manejarCambio}
                    required
                    fullWidth>
                    <MenuItem value="activa">Activa</MenuItem>
                    <MenuItem value="inactiva">Inactiva</MenuItem>
                </TextField>
                <Box
                    sx={{
                        gridColumn: "1 / -1",
                        display: "flex",
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                        gap: 1.5,
                        mt: 1
                    }}>
                    <Button type="submit" variant="contained" disabled={guardando}>
                        {guardando ? "Guardando..." : materiaEditar ? "Guardar cambios" : "Guardar"}
                    </Button>
                    {materiaEditar && (
                        <Button
                            type="button"
                            onClick={cancelar}
                            disabled={guardando}
                            variant="outlined">
                            Cancelar
                        </Button>
                    )}
                </Box>
                {error && (
                    <Alert severity="error" role="alert" sx={{ gridColumn: "1 / -1" }}>
                        {error}
                    </Alert>
                )}
            </Box>
        </Paper>
    )
}
export default FormularioMateria