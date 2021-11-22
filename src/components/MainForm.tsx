import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function MainForm() {
    const [session, setSession] = useState("");
    const [name, setName] = useState("");
    const [quadrant, setQuadrant] = useState("");

    return (
        <>
        <Container>
            <Box component="form"
                sx={{
                    // height: "100vh", center middle of screen
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                
            >
                <TextField required
                id="outlined-multiline-static-helperText"

                label="Session"
                multiline
                inputProps={{ maxLength: 140 }}
                rows={4}
                helperText="Enter session details (max 140 characters)"
                type="session"
                value={session}
                onChange = {(e) => setSession(e.target.value)}
                />        

                <TextField required 
                id="outlined-helperText" 
                label="name" 
                variant="outlined" 
                color="primary" 
                helperText="Enter name" 
                type="name"
                value={name}
                onChange = {(e) => setName(e.target.value)}
                />

                <TextField required 
                id="outlined-helperText" 
                label="quadrant" 
                variant="outlined" 
                color="primary" 
                helperText="Enter quadrant"
                type="quadrant"
                value={quadrant}
                onChange = {(e) => setQuadrant(e.target.value)} />
                <br/>

                <Button variant="contained">confirm</Button>
            </Box>
        </Container>
        </>
    )
}
