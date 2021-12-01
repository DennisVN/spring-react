import crudReducer from "./crudReducer";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
    exercises: crudReducer,
});

export default combinedReducers;