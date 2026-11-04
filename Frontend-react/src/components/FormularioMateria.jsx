import { useEffect, useState } from "react"
import { Alert, Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material"

const formularioVacio = {
    codigo: "",
    nombre: "",
    descripcion: "",
    cargaHoraria: "",
    estado: "activa"
}

const API_MATERIAS = "http://localhost:3000/materias"

function FormularioMateria({ onMateriaGuardada, materiaEditar, onCancelar }) {
    const [formulario, setFormulario] = useState(formularioVacio)
    const [error, setError] = useState("")
    const [exito, setExito] = useState("")
    const [guardando, setGuardando] = useState(false)

    useEffect(() => {
        setFormulario(materiaEditar ? {
            codigo: materiaEditar.codigo,
            nombre: materiaEditar.nombre,
            descripcion: materiaEditar.descripcion ?? "",
            cargaHoraria: String(materiaEditar.cargaHoraria),
            estado: materiaEditar.estado
        } : formularioVacio)
        setError("")
    }, [materiaEditar])

    function manejarCambio(evento) {
        const { name, value } = evento.target
        setFormulario(actual => ({ ...actual, [name]: value }))
    }

    function validarFormulario() {
        if (!formulario.codigo || formulario.codigo !== formulario.codigo.trim()) {
            return "El código es obligatorio y no debe tener espacios al inicio o al final."
        }
        if (!formulario.nombre.trim() || formulario.nombre.trim().length > 120) {
            return "Ingresá un nombre de hasta 120 caracteres."
        }
        if (formulario.descripcion.length > 0 && !formulario.descripcion.trim()) {
            return "La descripción no puede contener solo espacios."
        }
        const cargaHoraria = Number(formulario.cargaHoraria)
        if (!Number.isInteger(cargaHoraria) || cargaHoraria <= 0) {
            return "La carga horaria debe ser un número entero mayor a cero."
        }
        if (!["activa", "inactiva"].includes(formulario.estado)) {
            return "Seleccioná un estado válido."
        }
        return ""
    }

    async function guardar(evento) {
        evento.preventDefault()
        setError("")
        setExito("")

        const errorValidacion = validarFormulario()
        if (errorValidacion) {
            setError(errorValidacion)
            return
        }

        setGuardando(true)
        const editando = Boolean(materiaEditar)
        const materia = {
            codigo: formulario.codigo,
            nombre: formulario.nombre.trim(),
            descripcion: formulario.descripcion.trim(),
            cargaHoraria: Number(formulario.cargaHoraria),
            estado: formulario.estado
        }
        const url = editando
            ? `${API_MATERIAS}/${encodeURIComponent(materiaEditar.codigo)}`
            : API_MATERIAS

        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(materia)
            })
            const resultado = await respuesta.json().catch(() => ({}))

            if (!respuesta.ok) {
                setError(resultado.mensaje || "No se pudo guardar la materia.")
                return
            }

            setFormulario(formularioVacio)
            setExito(editando ? "Materia actualizada correctamente." : "Materia registrada correctamente.")
            onMateriaGuardada()
        } catch {
            setError("No se pudo conectar con el servidor.")
        } finally {
            setGuardando(false)
        }
    }

    function cancelar() {
        setError("")
        setExito("")
        onCancelar()
    }

    return (
        <Paper
            component="section"
            elevation={0}
            sx={{
                p: { xs: 2.5, sm: 3.5 },
                border: 1,
                borderColor: "divider",
                borderRadius: 4,
                bgcolor: "background.paper"
            }}
        >
            <Typography component="h2" variant="h5" sx={{ mb: 2.5, fontWeight: 700 }}>
                {materiaEditar ? "Editar materia" : "Nueva materia"}
            </Typography>
            <Box
                component="form"
                onSubmit={guardar}
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                    gap: 2
                }}
            >
                <TextField
                    name="codigo"
                    label="Código"
                    value={formulario.codigo}
                    onChange={manejarCambio}
                    required
                    fullWidth
                />
                <TextField
                    name="nombre"
                    label="Nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    slotProps={{ htmlInput: { maxLength: 120 } }}
                    required
                    fullWidth
                />
                <TextField
                    name="descripcion"
                    label="Descripción"
                    value={formulario.descripcion}
                    onChange={manejarCambio}
                    multiline
                    minRows={2}
                    fullWidth
                    sx={{ gridColumn: { sm: "1 / -1" } }}
                />
                <TextField
                    name="cargaHoraria"
                    label="Carga horaria"
                    type="number"
                    value={formulario.cargaHoraria}
                    onChange={manejarCambio}
                    slotProps={{ htmlInput: { min: 1, step: 1 } }}
                    required
                    fullWidth
                />
                <TextField
                    name="estado"
                    label="Estado"
                    select
                    value={formulario.estado}
                    onChange={manejarCambio}
                    required
                    fullWidth
                >
                    <MenuItem value="activa">Activa</MenuItem>
                    <MenuItem value="inactiva">Inactiva</MenuItem>
                </TextField>
                <Box sx={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: 1.5 }}>
                    {materiaEditar && (
                        <Button type="button" variant="outlined" onClick={cancelar} disabled={guardando}>
                            Cancelar
                        </Button>
                    )}
                    <Button type="submit" variant="contained" disabled={guardando}>
                        {guardando ? "Guardando..." : materiaEditar ? "Guardar cambios" : "Guardar materia"}
                    </Button>
                </Box>
                {error && <Alert severity="error" role="alert" sx={{ gridColumn: "1 / -1" }}>{error}</Alert>}
                {exito && <Alert severity="success" role="status" sx={{ gridColumn: "1 / -1" }}>{exito}</Alert>}
            </Box>
        </Paper>
    )
}

export default FormularioMateria