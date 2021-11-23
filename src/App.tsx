import React from 'react';
import './App.css';
import MainForm from "./components/MainForm";
import MainTable from "./components/MainTable"
import { Provider } from "react-redux";
import store from "./app/store"; 



function App() {
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
