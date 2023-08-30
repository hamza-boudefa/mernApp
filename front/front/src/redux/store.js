import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addNewUserReducer, loginReducer } from "./reducers/UsersReducer";
import { addNewProductReducer, deleteProdReducer, getProductReducer } from "./reducers/ProductsReducer";

const reducer=combineReducers({
    addNewUser:addNewUserReducer,
    loginDetails:loginReducer, 
    getProducts:getProductReducer,
    addProduct:addNewProductReducer,
    deleteProd:deleteProdReducer
})
// loginDetails => fi westha user , jebha m loginReducer
// loginDetails => bech ywali null kan badelt l page 
const fromLocalStorage=localStorage.getItem('cred')?JSON.parse(localStorage.getItem('cred')):null
// fromLocalStorage=>user

const initState={
loginDetails:{user:fromLocalStorage}
}

const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(thunk)))
export default store