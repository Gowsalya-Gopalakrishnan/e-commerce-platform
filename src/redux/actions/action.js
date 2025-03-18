import axios from 'axios'
export const FETCH_DATA="FETCH_DATA"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const FETCH_REQUEST = "FETCH_REQUEST" 
export const FETCH_FAILURE = "FETCH_FAILURE" 
export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const REMOVE_PRODUCTS = "REMOVE_PRODUCTS"


export const fetch=()=> async (dispatch)=>{
    try{
        const res = await axios.get(`https://fakestoreapi.com/auth/login`)
        dispatch({type:FETCH_DATA,payload:res.data})
        console.log(res)
    }
    catch(error){
        console.error("something went wrong",error)
    }
}

export const fetchProducts=()=>async(dispatch)=>{
    dispatch({type:FETCH_REQUEST})
    try{
        const res = await axios.get(`https://fakestoreapi.com/products`)
        console.log(res)
        dispatch({type:FETCH_PRODUCTS,payload:res.data})
    }
    catch(error){
        dispatch({type:FETCH_FAILURE,payload:error.message})
    }
}

export const addProducts=(prevValue)=>{
    return(
        {type:ADD_PRODUCTS,payload:prevValue}
    )
}

export const removeProducts=(id)=>{
    return(
        {type:REMOVE_PRODUCTS,payload:id}
    )
}