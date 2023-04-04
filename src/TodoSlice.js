
import { createSlice } from '@reduxjs/toolkit'
  
  const initialState = {
    value: 0,
    todolist : []
  }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addText: (state, action)=> {
            if(action.payload !== ""){
               state.todolist.push(action.payload) 
            } 
        },
        deleteText: (state, action)=> {
            state.todolist.splice(action.payload, 1)
        },
        deleteAll: (state)=> {
            state.todolist = []
        }
    }

})

export const {addText, deleteText, deleteAll} = todoSlice.actions
export default todoSlice.reducer