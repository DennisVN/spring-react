import React from 'react';
import './App.css';
import MainForm from "./components/MainForm";
import MainTable from "./components/MainTable"
import { Provider } from "react-redux";
// import store from "./app/store"; 
import store from './store';



function App() {
  console.log('Initial state: ', store.getState())
  return (
    <>
    <Provider store={store}> 
      <MainForm /><br/>
      <MainTable />
    </Provider>
    </>
  );
}

export default App;
