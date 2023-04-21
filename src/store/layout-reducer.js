import { createSlice } from "@reduxjs/toolkit";
const initialState = {show:true}
const layoutSlice = createSlice({
    name:"layout",
    initialState :initialState,
    reducers:{
        setShow(state){
            state.show=!state.show
        }
    }
})
export const layoutAction = layoutSlice.actions;
export default layoutSlice.reducer;