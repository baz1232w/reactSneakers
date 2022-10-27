import jsonRequest from "../../axiosRequests/jsonRequest";

const GET_ITEMS = 'preferPage/get-items'

const initialState = {
    items: []
}


const preferPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: [...action.items].filter(el => el.isPrefer === true)
            }
        default:
            return state
    }


    return state
}

const addToPreferAC = (items) => ({type: GET_ITEMS, items})


export const getPreferItems = () => async (dispatch)=> {
    dispatch(addToPreferAC(await jsonRequest.getItems()))
}

export const unPrefer = (id,callback) => async (dispatch) => {
    const item = await jsonRequest.getItem(id)
    item.isPrefer = false
    await jsonRequest.preferItem(id, item)
    dispatch(addToPreferAC(await jsonRequest.getItems()))
}

export default preferPageReducer