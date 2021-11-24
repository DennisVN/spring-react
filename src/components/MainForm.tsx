import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
// import store from '../app/store';
import { addForm } from '../features/sessionSlice';
import store from '../store';


const MainForm: React.FC = () => {
    const [session, setSession] = useState("");
    const [name, setName] = useState("");
    const [quadrant, setQuadrant] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("clicked");

        dispatch(addForm({
            session: session,
            name: name, 
            quadrant: quadrant,
            formIsAdded: true,
        }));

        // console.log(sessionSpecs);
        // console.log(session);
        // console.log(name);
        // console.log(quadrant);
        // console.log(store.getState());
    }
    
    return (
        <>
        <Container>
            <Box component ="form"
                sx={{
                    // height: "100vh", 
                    py: 8,
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <form className="mainForm" onClick={handleSubmit}>
                    <TextField  sx={{display: "flex"}} required
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

                    <TextField  sx={{display: "flex"}} required 
                    id="outlined-helperText" 
                    label="name" 
                    variant="outlined" 
                    color="primary" 
                    helperText="Enter name" 
                    type="name"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />

                    <TextField  sx={{display: "flex"}} required 
                    id="outlined-helperText" 
                    label="quadrant" 
                    variant="outlined" 
                    color="primary" 
                    helperText="Enter quadrant"
                    type="quadrant"
                    value={quadrant}
                    onChange = {(e) => setQuadrant(e.target.value)} />
                    <br/>

                    <Button type="submit" variant="contained">+ Add</Button>
                </form>
            </Box>
        </Container>
        </>
    )
}
export default MainForm;

function sessionSpecs(sessionSpecs: any) {
    throw new Error('Function not implemented.');
}

