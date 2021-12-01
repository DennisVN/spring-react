// import store from "../../app/store";

import { PayloadAction } from "@reduxjs/toolkit"



const initialState: any[] = [
    { id: 0, session: '000000000', name: 'TEST', quadrant: 'Antwerp', timestamp: '23-11-2021 12:00' },
    { id: 1, session: '05656515615', name: 'Jean-Jacques', quadrant: 'Brussels', timestamp: '23-11-2021 12:00' },
    { id: 2, session: '056514981651', name: 'Jean-Paul', quadrant: 'Brussels', timestamp: '23-11-2021 12:00' },
]

export interface exercises {
    id: number,
    session: string,
    name: string,
    quadrant: string,
    isAdded: true
}

function nextExerciseId(exercise: any[]) {
    const maxId = exercise.reduce((maxId, exercise) => Math.max(exercise.id, maxId), -1)
    return maxId + 1
  }

export default function exercisesReducer(state = initialState, action: PayloadAction<any>, ) {
    // console.log(store.getState());
    switch (action.type) {
        case 'exercises/exerciseAdded': {
            return [
                ...state,
                {
                    id: nextExerciseId(state),
                    session: "mo how vint",
                    name: 'wuk e me dat ier ?',
                    quadrant: 'wéeroal VTM keirl...',
                    exerciseSession: action.type
                }
            ]
        }
        default:
        return state
    }
}
