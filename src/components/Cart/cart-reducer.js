const TOGGLE_CART = 'cart-reducer/toggle-cart'
const ORDER_COMPLETE = 'cart-reducer/order-complete'

const initialState = {
    isOpen: false,
    orderComplete: false,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case ORDER_COMPLETE:
            return{
                ...state,
                orderComplete: action.result
            }
        default:
            return state
    }
}

export const setOrderComplete = (result) => ({type:ORDER_COMPLETE,result})

export const toggleCart = () =>({type: TOGGLE_CART})

export default cartReducer