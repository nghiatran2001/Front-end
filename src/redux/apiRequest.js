import axios from "axios";

import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async (users, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("api/user/login", users);
    console.log(res);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};
