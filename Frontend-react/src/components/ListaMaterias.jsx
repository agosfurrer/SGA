import { useEffect, useState } from "react"
import { Alert, Box, Button, Chip, Paper, Stack, Typography } from "@mui/material"

const API_MATERIAS = "http://localhost:3000/materias"

export function ListaMaterias({ actualizar, onMateriaGuardada, onEditarMateria }) {
    const [materias, setMaterias] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")
    const [eliminandoCodigo, setEliminandoCodigo] = useState("")

    async function eliminarMateria(codigo) {
        if (!window.confirm("¿Seguro que querés eliminar esta materia?")) {
            return
        }

        setError("")
        setEliminandoCodigo(codigo)
        try {
            const respuesta = await fetch(`${API_MATERIAS}/${encodeURIComponent(codigo)}`, {
                method: "DELETE"
            })
            const resultado = await respuesta.json().catch(() => ({}))

            if (!respuesta.ok) {
                setError(resultado.mensaje || "No se pudo eliminar la materia.")
                return
            }

            onMateriaGuardada()
        } catch {
            setError("No se pudo conectar con el servidor.")
        } finally {
            setEliminandoCodigo("")
        }
    }

    useEffect(() => {
        async function cargarMaterias() {
            setCargando(true)
            setError("")
            try {
                const respuesta = await fetch(API_MATERIAS)
                if (!respuesta.ok) {
                    const resultado = await respuesta.json().catch(() => ({}))
                    throw new Error(resultado.mensaje || "No se pudo cargar la lista de materias.")
                }
                setMaterias(await respuesta.json())
            } catch (errorCarga) {
                setError(errorCarga.message || "No se pudo conectar con el servidor.")
            } finally {
                setCargando(false)
            }
        }

        cargarMaterias()
    }, [actualizar])

    if (cargando) {
        return (
            <Paper component="section" elevation={0} sx={{ p: 3, border: 1, borderColor: "divider", borderRadius: 4 }}>
                <Typography color="text.secondary">Cargando materias...</Typography>
            </Paper>
        )
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
                Materias
            </Typography>
            {error && <Alert severity="error" role="alert" sx={{ mb: 2 }}>{error}</Alert>}
            {materias.length === 0 ? (
                <Typography color="text.secondary">No hay materias registradas.</Typography>
            ) : (
                <Stack component="ul" spacing={1.5} sx={{ listStyle: "none", p: 0, m: 0 }}>
                    {materias.map(materia => (
                        <Paper
                            component="li"
                            key={materia.codigo}
                            elevation={0}
                            sx={{
                                p: { xs: 2, sm: 2.5 },
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 3,
                                display: "flex",
                                alignItems: { xs: "stretch", sm: "center" },
                                justifyContent: "space-between",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: 2
                            }}
                        >
                            <Stack spacing={0.75} sx={{ minWidth: 0 }}>
                                <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
                                    <Chip label={materia.codigo} color="primary" variant="outlined" size="small" />
                                    <Typography fontWeight={600}>{materia.nombre}</Typography>
                                    <Chip
                                        label={materia.estado === "activa" ? "Activa" : "Inactiva"}
                                        color={materia.estado === "activa" ? "success" : "default"}
                                        size="small"
                                    />
                                </Stack>
                                {materia.descripcion && (
                                    <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: "anywhere" }}>
                                        {materia.descripcion}
                                    </Typography>
                                )}
                                <Typography variant="body2" color="text.secondary">
                                    Carga horaria: {materia.cargaHoraria} horas
                                </Typography>
                            </Stack>
                            <Box sx={{ display: "flex", flex: "0 0 auto", justifyContent: "flex-end", gap: 1 }}>
                                <Button type="button" variant="outlined" size="small" onClick={() => onEditarMateria(materia)}>
                                    Editar
                                </Button>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    disabled={eliminandoCodigo === materia.codigo}
                                    onClick={() => eliminarMateria(materia.codigo)}
                                >
                                    {eliminandoCodigo === materia.codigo ? "Eliminando..." : "Eliminar"}
                                </Button>
                            </Box>
                        </Paper>
                    ))}
                </Stack>
            )}
        </Paper>
    )
}