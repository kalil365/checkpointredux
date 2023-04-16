import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Types/TodoType";

export const addTodo =(newTodo) =>{
    return {
        type:ADDTODO ,
        payload :newTodo ,

    }
}
export const deleteTodo =(id) =>{
    return {
        type:DELETETODO ,
        payload :id ,

    }
}
export const editTodo =(id , newText) =>{
    return {
        type:EDITTODO ,
        payload : {id , newText}

    }
}
export const doneTodo =(id) =>{
    return {
        type:DONETODO ,
        payload :id ,

    }
}