import axios from "axios";

import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import {
  allUserFailed,
  allUserStart,
  allUserSuccess,
  deleteUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;
    const res = await axios.post(BACKEND_API + "/auth/login", user);
    if (res.data.disable) {
      alert("Tài khoản bị khóa. Liên hệ Admin để mở!");
    } else {
      dispatch(loginSuccess(res.data));
      navigate("/");
    }
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;
    const res = await axios.post(BACKEND_API + "/auth/register", user);
    dispatch(registerSuccess(res.data));
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getAllUser = async (accessToken, dispatch, axiosJWT) => {
  dispatch(allUserStart());
  try {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;
    const res = await axiosJWT.get(BACKEND_API + "/user/alluser", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(allUserSuccess(res.data));
  } catch (error) {
    dispatch(allUserFailed());
  }
};

export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUserStart());
  try {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;
    const res = await axiosJWT.delete(BACKEND_API + "/user/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUserSuccess(res.data));
  } catch (error) {
    dispatch(deleteUserFailed(error.response.data));
  }
};

export const updateUser = async (dispatch, id, accessToken) => {
  dispatch(updateUserStart());
  try {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;
    const res = await axios.put(BACKEND_API + "/user/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(updateUserSuccess(res.data));
  } catch (error) {
    dispatch(updateUserFailed(error));
  }
};

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logoutStart());
  try {
    const BACKEND_API = process.env.REACT_APP_BACKEND_API;
    await axiosJWT.post(BACKEND_API + "/auth/logout", id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(logoutFailed());
  }
};
