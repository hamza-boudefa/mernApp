import axios from "axios"
import { ADD_NEW_PRODUCT_FAIL, ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/ProductsConstants"


export const getProducts=()=>async(dispatch)=>{

    try {
        dispatch({type:GET_PRODUCT_REQUEST})
        const {data}=await axios.get('http://localhost:8000/prodAPI/getAllProd')
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
        
    } catch (error) {
    dispatch({type:GET_PRODUCT_FAIL})
    }
}

export  const addNewProduct=(newProduct)=>async(dispatch,getState)=>{
    try {
        dispatch({type:ADD_NEW_PRODUCT_REQUEST})
        const {loginDetails:{user}}=getState()
const config={headers:{auth:user.token}}
        const {data}=await axios.post('http://localhost:8000/prodAPI/addProd',newProduct,config)
        console.log(data)
        dispatch({type:ADD_NEW_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_NEW_PRODUCT_FAIL})
    }
}

export const deleteProd =(id)=>async(dispatch,getState)=>{
    try {
        const {loginDetails:{user}}=getState()
        const config={headers:{auth:user.token}}
        dispatch({type:DELETE_PRODUCT_REQUEST})
        const {data}=await axios.delete(`http://localhost:8000/prodAPI/deleteProd/${id}`,config)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAIL})
    }
}