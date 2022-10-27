import jsonRequest from "../../axiosRequests/jsonRequest";

const TOGGLE_CART = 'cart-reducer/toggle-cart'
const ADD_TO_CART = 'cart-reducer/add-to-cart'
const SET_TOTAL_PRICE = 'cart-reducer/set-total-price'

const initialState = {
    items: [],
    isOpen: false,
    totalPrice:null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case ADD_TO_CART:
            return {
                ...state,
                items: [...action.items]
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.items.reduce((sum,el) => sum += el.price,0)
            }
        default:
            return state
    }
}


const getItemsInCart = (items) => ({type: ADD_TO_CART, items})

export const setTotalPrice = () => ({type: SET_TOTAL_PRICE})

export const toggleCart = () =>({type: TOGGLE_CART})

export const getItemsInCartThunk = () => async (dispatch) => {
    dispatch(getItemsInCart(await jsonRequest.getItemsInCart()))
}

export const addToCart =(id) => async (dispatch) => {
    const item = await jsonRequest.getItem(id)
    await jsonRequest.setToCart(item)
    dispatch(getItemsInCart(await jsonRequest.getItemsInCart()))
    dispatch(setTotalPrice())

}

export const deleteCartItem = (id) => async (dispatch) => {
    await jsonRequest.deleteItemFromCart(id)
    const item = await jsonRequest.getItem(id)
    item.isAdded = false
    await jsonRequest.preferItem(id, item)
    dispatch(getItemsInCart(await jsonRequest.getItemsInCart()))
    dispatch(setTotalPrice())
}
//
// export const getOrder = () => async () => {
//
//     const cartItems = await jsonRequest.getItemsInCart()
//     const string = JSON.stringify(cartItems)
//     await jsonRequest.addToHistory(string)
// }





export default cartReducer