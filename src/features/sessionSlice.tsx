import { createSlice } from "@reduxjs/toolkit";

export type session = {
    session: string,
    name: string,
    quadrant: string
}

export const sessionSlice = createSlice({
    name: "addForm",
    initialState:{
        addForm:null,
    },
    reducers:{
        addForm: (state, action) => {
            state.addForm = action.payload;
        }
    }
})
// export actions
export const {addForm} = sessionSlice.actions;
// export state
export const selectSession = (state: { session: { session: string; }; }) => state.session.session;
// export reducer itself
export default sessionSlice.reducer;