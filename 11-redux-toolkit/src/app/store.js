import {configureStore} from '@reduxjs/toolkit';
import todoReducers from "./../feathures/todo/todoSlice"
export const  store = configureStore({
    reducer:todoReducers
})