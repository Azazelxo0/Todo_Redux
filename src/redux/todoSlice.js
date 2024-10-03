import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        list: [],
        completed:[],
      },
    reducers:{
        addTodo: (state, action) => {
            state.list.push({
              id: Date.now(),
              text: action.payload,
              
            });
          },
          deleteTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
          },
          addCompleted:(state,action)=>{
            state.completed.push({
                text:action.payload,
            })
          }
    }
})
export default todoSlice.reducer;
export const {addTodo,deleteTodo,addCompleted}= todoSlice.actions