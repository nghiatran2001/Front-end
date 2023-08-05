import React, { useState } from "react";
import { Button, Input, InputLabel } from "@mui/material";
import "./Login.css";
import { notification } from "antd";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user as userAPI } from "../../API/index";
import userSlice from "../../redux/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();

  const [loginInfo, setLoginInfo] = useState({});

  const login = async (e) => {
    e.preventDefault();
    try {
      const result = await userAPI.login(loginInfo);
      if (result.data.user.disable) {
        api.open({
          type: "error",
          message: "Tài khỏan bạn đã bị khóa vui lòng liên hệ admin để mở!!!!",
        });
      } else {
        dispatch(userSlice.actions.setUser(result.data.user));
        document.cookie = `token=${result.data.refreshToken}`;
        navigate("/");
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Email hoặc mật khẩu không chính xác.",
      });
    }
  };

  const handleLoginInfoChange = (key, value) => {
    setLoginInfo((pre) => {
      return { ...pre, [key]: value };
    });
  };

  return (
    <div>
      {contextHolder}
      <div className="auth">
        <h1>ĐĂNG NHẬP</h1>
        <Form className="form">
          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            type="email"
            placeholder="Email"
            className="input"
            onChange={(e) => {
              handleLoginInfoChange("email", e.target.value);
            }}
          ></Input>
          <InputLabel className="label">Mật Khẩu</InputLabel>
          <Input
            required
            type="password"
            placeholder="Mật khẩu"
            className="input"
            onChange={(e) => {
              e.preventDefault();
              handleLoginInfoChange("password", e.target.value);
            }}
          ></Input>
          <Button className="button" onClick={login}>
            Đăng nhập
          </Button>
          <span>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </span>
        </Form>
      </div>
    </div>
  );
}
