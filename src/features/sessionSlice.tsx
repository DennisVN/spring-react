import { createSlice } from "@reduxjs/toolkit";

export type Form = {
    session: string,
    name: string,
    quadrant: string
}

export const sessionSlice = createSlice({
    name: "session",
    initialState:{
        session:null,
    },
    reducers:{
        addForm: (state, action) => {
            state.session = action.payload;
        }
    }
})
// export actions
export const {addForm} = sessionSlice.actions;
// export state
export const selectSession = (state: { session: { session: string; }; }) => state.session.session;
// export reducer itself
export default sessionSlice.reducer;