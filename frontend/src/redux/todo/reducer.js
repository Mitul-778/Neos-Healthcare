import { GET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './action'
const init ={ todo:[] };

export const todoReducer = (store=init,{type,payload})=>{
    switch(type){
        case GET_TODO:
            return { ...store, todo:payload }
        case ADD_TODO:
            return { ...store, todo:[...store.todo,payload] }
        case UPDATE_TODO:
            return { ...store, todo:store.todo.map((e)=>(e.id===payload.id ? payload : e)) }
        case DELETE_TODO:
            return { ...store, todo:store.todo.filter((e)=>(e.id !== payload.id)) }
        default:
            return store
    }
}