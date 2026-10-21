import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


function ejemploMUI () {

    return (
        <>
     <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
     <Stack direction="row" spacing={2} sx={{
        mt:2, mx:3
     }}>
      <Button variant="outlined" startIcon={<DeleteIcon /> }>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}
      sx={{
        bgcolor: "blue",
        color: "black",
        "&:hover": {bgcolor: "#bee2e2"}
      }}
      >
        Send
      </Button>
    </Stack>
    </>
)
}

export default ejemploMUI 