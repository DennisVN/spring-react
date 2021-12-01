import './App.css';
import MainForm from "./components/MainForm";
import MainTable from "./components/MainTable"
import { Provider } from "react-redux";
import combinedReducers from './reducers';
import { createStore } from 'redux';
import initialState from './state';
import { useSelector, useDispatch } from 'react-redux';
import { create} from './actions';


const store = createStore(
  combinedReducers,
);

console.log('Initial state: ', initialState)

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
