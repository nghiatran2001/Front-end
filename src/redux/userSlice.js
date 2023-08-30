import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      getAllUser: null,
      isFetching: false,
      error: false,
    },
    msg: "",
  },
  reducers: {
    allUserStart: (state) => {
      state.users.isFetching = true;
    },
    allUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.getAllUser = action.payload;
    },
    allUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    deleteUserStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.msg = action.payload;
    },
    deleteUserFailed: (state, action) => {
      state.users.isFetching = false;
      state.users.error = true;
      state.msg = action.payload;
    },
    updateUserStart: (state) => {
      state.users.isFetching = true;
    },
    updateUserSuccess: (state) => {
      state.users.isFetching = false;
    },
    updateUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
  },
});
export const {
  allUserStart,
  allUserSuccess,
  allUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
