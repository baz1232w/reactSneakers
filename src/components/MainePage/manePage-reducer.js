import jsonRequest from "../../axiosRequests/jsonRequest";

const GET_ITEMS = 'manePage/get-items'
const SET_PREFER = 'manePage/set-prefer'
const UN_PREFER = 'manePage/un-prefer'
const ADD_TO_CART = 'manePage/add-to-cart'
const DELETE_FROM_CART = 'manePage/delete-from-cart'

const initialState = {
    slider: {
        images: null
    },
    items: null
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS :
            return {
                ...state,
                items: [...action.items]
            }
        case SET_PREFER:
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.code === action.code){
                        el.isPrefer = true
                        return el
                    }
                    return  el
                })
            }
        case UN_PREFER:
            return {
                ...state,
                items: [...state.items].map(el => {
                    if(el.code === action.code){
                        el.isPrefer = false
                        return el
                    }
                    return  el
                })
            }
        case ADD_TO_CART:
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.code === action.code){
                        el.isAdded = true
                        return el
                    }
                    return  el
                })
            }
        case DELETE_FROM_CART:
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.code === action.code){
                        el.isAdded = false
                        return el
                    }
                    return  el
                })
            }
        default:
            return state
    }

}

const getItems = (items) => ({type: GET_ITEMS, items})
const setPrefer = (code) => ({type: SET_PREFER, code})
const unPrefer = (code) => ({type: UN_PREFER, code})
const deleteCart = (code) => ({type: DELETE_FROM_CART, code})
const addToCart = (code) => ({type: ADD_TO_CART, code})


export const preferItem = (id) => async (dispatch) => {
    const item = await jsonRequest.getItem(id)
    item.isPrefer = true
    await jsonRequest.preferItem(id, item)
    dispatch(setPrefer(item.code))
}

export const unPreferItem = (id) => async (dispatch) => {
    const item = await jsonRequest.getItem(id)
    item.isPrefer = false
    await jsonRequest.preferItem(id, item)
    dispatch(unPrefer(item.code))
}

export const addedToCart = (id) => async (dispatch) => {
    const item = await jsonRequest.getItem(id)
    item.isAdded = true
    await jsonRequest.preferItem(id, item)
    dispatch(addToCart(item.code))
}

export const deleteFromCart = (id) => async (dispatch) => {
    const item = await jsonRequest.getItem(id)
    item.isAdded = false
    await jsonRequest.preferItem(id, item)
    dispatch(deleteCart(item.code))
}

export const getItemsThunk = () => async (dispatch) => {
    const data = await jsonRequest.getItems()
    dispatch(getItems(data))
}


export default mainPageReducer