import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/MainReducer";

const store = configureStore({
    reducer:{
        data:postsReducer
    }
});
export default store;