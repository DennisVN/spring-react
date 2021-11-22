import React from 'react';
import './App.css';
import MainForm from './components/MainForm';
import { Provider } from "react-redux";
import store from "./app/store"; 


function App() {
  return (
    <>
    <Provider store={store}> 
      <MainForm />
    </Provider>
    </>
  );
}

export default App;
