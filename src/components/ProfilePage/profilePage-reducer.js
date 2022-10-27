const SET_ITEMS = 'profilePage/set-items'

const initialState = {
    items: [],
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ITEMS:
            return {
                ...state,
                items: [...state.items,...action.items]
            }
    }
    return state
}

const setItems = (items) => ({type:SET_ITEMS,items})

export const getProfileItems = (items) => (dispatch) => {
    debugger
    dispatch(setItems(items))
}



export default profilePageReducer