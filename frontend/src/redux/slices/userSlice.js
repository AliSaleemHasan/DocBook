import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export const Selector = (state) => state.user.value;
export default userSlice.reducer;
