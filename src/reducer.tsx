import { combineReducers } from "redux";

import exercisesReducer from "./features/exercises/exercisesSlice";

const rootReducer = combineReducers({
    exercises: exercisesReducer
})

export default rootReducer;

// const initialState = {
//     exercises: [
//         { id: 0, session: '0511651118', name: 'Jean-Jean', quadrant: 'Antwerp', timestamp: '23-11-2021 12:00' },
//         { id: 1, session: '05656515615', name: 'Jean-Jacques', quadrant: 'Brussels', timestamp: '23-11-2021 12:00' },
//         { id: 2, session: '056514981651', name: 'Jean-Paul', quadrant: 'Brussels', timestamp: '23-11-2021 12:00' },
//     ],

// }

// // Use the initialState as a default value
// export default function exerciseReducer(state = initialState, action: { type: any }) {
//     switch (action.type) {
//       // Do something here based on the different types of actions
//       default:
//         return state
//     }
// }
  