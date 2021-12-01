import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Component, Key } from 'react';
import { render } from 'react-dom';
// import { connect } from 'react-redux';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Table } from 'react-virtualized';
// import store from '../app/store';
import initialState from '../state';


// Dummy data, remove & replace with props !!! 

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'session', headerName: 'session', width: 1000 },
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'quadrant', headerName: 'quadrant', type: 'string',width: 200, },
    { field: 'timestamp', headerName: 'timestamp', width: 200, }
];
  
const rows = [
    { id: 1, session: '0511651118', name: 'Jean-Jean', quadrant: "Antwerp", timestamp: "23-11-2021 12:00" },
    { id: 2, session: '05656515615', name: 'Jean-Jacques', quadrant: "Brussels", timestamp: "23-11-2021 12:00" },
    { id: 3, session: '056514981651', name: 'Jean-Paul', quadrant: "Malinois", timestamp: "23-11-2021 12:00" },
    // map data door rows ...state
];

export interface list {
    id: number,
    session: string, 
    name: string, 
    quadrant: string
}

const MainTable: React.FC = () => {
    const list = useSelector((state: RootStateOrAny) => state.exercises)
    console.log("here is list", list);

    return(
        <>
        <div style={{ height: 400, width: '100%'}}>
        <DataGrid
            rows={rows} // ier is te doen
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>

        </>
    )
}

export default MainTable;




