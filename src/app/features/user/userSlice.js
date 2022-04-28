import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
