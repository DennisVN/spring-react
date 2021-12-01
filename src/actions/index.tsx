export const create = (session: string, name: string, quadrant: string) => {
    return {
        type: "CREATE",
        Payload: {
            session, name, quadrant
        }
    }
};

// export const getCrudList = (id: number, session: string, name: string, quadrant: string) => {
//     return {
//         type: "GET_CRUDLIST",
//         Payload: {
//             id, session, name, quadrant
//         }
//     }
// };