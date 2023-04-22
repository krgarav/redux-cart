import { createSlice } from "@reduxjs/toolkit";
const initialState = { show: true, notification: null };
const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    setShow(state) {
      state.show = !state.show;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const layoutAction = layoutSlice.actions;
export default layoutSlice.reducer;
