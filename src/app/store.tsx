import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../features/sessionSlice";

export default configureStore ({
    reducer: {
        sessionSpecs: sessionReducer,
    }
})