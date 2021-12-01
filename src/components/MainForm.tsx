import { Button, Container, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { create } from '../actions';
import { FormEvent, Key, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

export interface exercises {
    id: number,
    session: string, 
    name: string, 
    quadrant: string
}

const MainForm: React.FC = () => {
    const [session, setSession] = useState("");
    const [name, setName] = useState("");
    const [quadrant, setQuadrant] = useState("");
    const list = useSelector((state: RootStateOrAny) => state.exercises);
    const dispatch = useDispatch();

    console.log(list);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("button clicked");
        console.log(session);
        // console.log(session);
        // console.log(name);
        // console.log(quadrant);
        dispatch(create(session, name, quadrant));

    }
    
    return (
        <>
        <Container>
            <Box
                sx={{
                    // height: "100vh", 
                    py: 8,
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <form className="mainForm" onSubmit={handleSubmit}>
                    <TextField  sx={{display: "flex"}} required
                    id="outlined-multiline-static-helperText"
                    label="session"
                    name = "session"
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
                    name = "name"
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
                    name = "quadrant"
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
        <ul>
        {list.map((item: any , index: Key | null | undefined) => {
            console.log("IK ZEN ER NOG NI");
            console.log(item.name);
          return (
            <li key={index}>{item.session}{item.name}{item.quadrant}</li>
          )
        })}
      </ul>
        </>
    )
}
export default MainForm;




