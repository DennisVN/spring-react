import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Component } from 'react';
import { render } from 'react-dom';
// import { connect } from 'react-redux';
import sessionSlice, { addForm } from '../features/sessionSlice';
import { useSelector } from 'react-redux';
// import store from '../app/store';


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
];

const MainTable: React.FC = () => {
    // // const formData = useSelector<any, void>((state: any)  => state.sessionSpecs)
    // const formData = store.getState(); 
    // console.log(formData);

    // console.log(this.props);
    // console.log({addForm});
    // console.log(store.getState());
    // console.log(sessionSpecs)


    return(
        <>
        <div>{addForm}</div>
        {/* <div style={{ height: 400, width: '100%'}}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div> */}
        </>
    )
}
// const mapStateToProps = (state: { sessionSpecs: { addForm: any; }; }) => {
//     return{
//         sessionSpecs: state.sessionSpecs.addForm
//     }
// }

export default MainTable;

function state(state: any, arg1: (DefaultRootState: unknown) => any) {
    throw new Error('Function not implemented.');
}

function getState(sessionSpecs: any): any {
    throw new Error('Function not implemented.');
}

function sessionSpecs(sessionSpecs: any): any {
    throw new Error('Function not implemented.');
}
// export default connect(mapStateToProps)(MainTable)

