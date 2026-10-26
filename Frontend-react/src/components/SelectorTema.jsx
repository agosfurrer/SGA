import { Box } from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import MaterialUISwitch from "./MaterialUISwitch"

function SelectorTema () {
    const {mode, setMode} = useColorScheme()

    if(!mode) {
        return null
    }
    const modoOscuro = mode === "dark"

    function cambiarModo(event) {
        setMode(event.target.checked ? "dark" : "light")
    }
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 3,
            width: "100%"
        }}>
            <MaterialUISwitch
            checked={modoOscuro}
            onChange={cambiarModo}
            inputProps={{
                "aria-laber" : "Cambiar modo claro y oscuro"
            }}
            ></MaterialUISwitch>
        </Box>
    )
}

export default SelectorTema