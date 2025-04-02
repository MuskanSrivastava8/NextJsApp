const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./slice";
import todoReducer from "./todoSlice"
import userReducer from "./slice"

export const store = configureStore({
    reducer:{
        userData: userReducer,
        todolist:todoReducer
    }

})