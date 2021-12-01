import initialState from '../state';

const crudReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case "CREATE":{
            return [
                ...state,
                {
                    id: state.length,
                    session: action.Payload.session,
                    name: action.Payload.name,
                    quadrant: action.Payload.quadrant
                }
            ];
        }
        default:{
            return state;
        }
    }
}
export default crudReducer;