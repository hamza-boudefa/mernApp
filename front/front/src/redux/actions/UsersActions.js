import axios from "axios"
import { ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST, ADD_NEW_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../constants/UsersConstants"

export const addNewUser=(newUser)=>async(dispatch)=>{
    console.log(newUser)
    try {
        dispatch({type:ADD_NEW_USER_REQUEST})
        const {data}= await axios.post('http://localhost:8000/userAPI/newUser',newUser)
        console.log(data)
        dispatch({type:ADD_NEW_USER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:ADD_NEW_USER_FAIL})
    }
}

export const login=(cred)=>async(dispatch)=>{
    console.log(cred)
    try {
        dispatch({type:LOGIN_REQUEST})
        const {data}=await axios.post('http://localhost:8000/userAPI/login',cred)
        console.log(data)
        localStorage.setItem('cred',JSON.stringify(data))
        dispatch({type:LOGIN_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:LOGIN_FAIL})
    }
}
export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.removeItem('cred')
}