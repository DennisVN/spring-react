import { createSlice } from "@reduxjs/toolkit";

interface addForm {
    session: string,
    name: string,
    quadrant: string
}

export const sessionSlice = createSlice({
    name: "sessionSpecs",
    initialState:{
        sessionSpecs:null,
    },
    reducers:{
        addForm: (state, action) => {
            state.sessionSpecs = action.payload;
        }
    }
})
// export actions
export const {addForm} = sessionSlice.actions;
// export state
export const selectSession = (state: { sessionSpecs: { sessionSpecs: string; }; }) => state.sessionSpecs.sessionSpecs;
// export reducer itself
export default sessionSlice.reducer;