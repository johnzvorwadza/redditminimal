import { createSlice } from "@reduxjs/toolkit";

const MainReducer = createSlice({  
name:"posts"
,initialState:{
    r:"pics"
    ,posts:[]
    ,s:""
    ,loading:false
}
,extraReducers: {
    setPosts: (state, action)=>{
        state.posts = action.payload;
    },
    setR:(state, action)=>{
        state.r = action.payload;
    },
    setS:(state, action)=>{
        state.s = action.payload;
    },
    setLoading:(state, action)=>{
        state.loading = action.payload;
    },
    
},
}
);

export const { setPosts, setR, setS } = MainReducer.actions;
export default MainReducer.reducer;