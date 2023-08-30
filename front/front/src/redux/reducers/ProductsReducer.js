import { ADD_NEW_PRODUCT_FAIL, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/ProductsConstants";

export const getProductReducer=(state={},action)=>{
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
        return {loading:true}
            
        case GET_PRODUCT_SUCCESS:
            return {loading:false,products:action.payload}
        case GET_PRODUCT_FAIL:
            return {loading:false,message:action.payload}
        default:
            return state;
    }
}

export const addNewProductReducer=(state={},action)=>{
switch (action.type) {
    case ADD_NEW_PRODUCT_REQUEST:
        return {loading:true}
        
    case ADD_NEW_PRODUCT_SUCCESS:
        return {loading:false, newProduct:action.payload}
    case ADD_NEW_PRODUCT_FAIL:
        return {loading:false}
    default:
    return state
}
}
export const deleteProdReducer=(state={},action)=>{
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return {loading:true}
            
        case DELETE_PRODUCT_SUCCESS:
            return {loading:false,products:action.payload}
        case DELETE_PRODUCT_FAIL:
            return {loading:false}
    
        default:
           return state;
    }
}