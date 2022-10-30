import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import mainPageReducer from "../components/MainePage/manePage-reducer";
import cartReducer from "../components/Cart/cart-reducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    mainPage:mainPageReducer,
    cart:cartReducer,
})

const store = createStore(reducers,applyMiddleware(thunk))

window.store = store
export default store