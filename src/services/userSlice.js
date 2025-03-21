import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
