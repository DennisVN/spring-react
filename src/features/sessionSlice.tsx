import { createSlice } from "@reduxjs/toolkit";

export interface sessionSpecs {
    id: number,
    session: string,
    name: string,
    quadrant: string
}

const sessionSlice = createSlice({
    name: "sessionSpecs",
    initialState:{
        sessionSpecs:null,
    },
    reducers:{
        addForm: (state, action) => {
            state.sessionSpecs = action.payload;
        },

    }
})
// export actions
export const {addForm} = sessionSlice.actions;
// export state
export const selectSession = (state: { sessionSpecs: { sessionSpecs: any; }; }) => state.sessionSpecs.sessionSpecs;
// export reducer itself
export default sessionSlice.reducer;

