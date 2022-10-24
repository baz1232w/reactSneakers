import {combineReducers, legacy_createStore as createStore} from "redux";
import manePageReducer from "../components/MainePage/ManePage-reducer";

const reducers = combineReducers({
    mainePage:manePageReducer,
})

const store = createStore(reducers)

export default store