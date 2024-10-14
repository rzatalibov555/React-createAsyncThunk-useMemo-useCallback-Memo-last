import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    data: [],
    preloader: false,
    error: "" 
}

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todossdsdsd")
    return response.data;
})

const todo_slice = createSlice({
    name:"todos",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.preloader = true;
            state.error = ""
        });

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.preloader = false;
        })

        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.preloader = false;
            // state.error = "API invalid";
            state.error = action.error.message || "API invalid"
        })

    }

})

export default todo_slice.reducer