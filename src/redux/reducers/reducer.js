import { ADD_PRODUCTS, FETCH_DATA, FETCH_FAILURE, FETCH_PRODUCTS, FETCH_REQUEST, REMOVE_PRODUCTS } from "../actions/action"

const initial = {data:[],loading:false,error:null}
export const reducerFn=(state=initial,action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {...state,data:action.payload}
        case FETCH_REQUEST:
            return {...state,loading:true}
        case FETCH_PRODUCTS:
            return {...state,data:action.payload,loading:false}
        case ADD_PRODUCTS:
            return{...state,data:[...state.data,action.payload]}
        case REMOVE_PRODUCTS:
            const input = {...state,data:state.data.filter((input)=>input.id!==action.payload)}
            return input;
        default:
            return state
    }
}