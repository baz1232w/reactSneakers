import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import headerReducer from "../components/Header/header-reducer";
import mainPageReducer from "../components/MainePage/manePage-reducer";
import cartReducer from "../components/Cart/cart-reducer";
import preferPageReducer from "../components/PreferPage/preferPage-reducer";
import profilePageReducer from "../components/ProfilePage/profilePage-reducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    header: headerReducer,
    mainPage:mainPageReducer,
    cart:cartReducer,
    preferPage:preferPageReducer,
    profilePage:profilePageReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

window.store = store
export default store