const ADD_LOCATION = '/locations/ADD_LOCATION'


/*-------------ACTIONS-------------*/

const addOneLocation = location =>({
    type:ADD_LOCATION,
    
    location
})

/*-------------THUNKS-------------*/

export const newHost = () => async (dispatch) => {
    
}