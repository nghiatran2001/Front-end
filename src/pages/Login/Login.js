import React, { useState } from "react";
import { Button, InputLabel } from "@mui/material";
import "./Login.css";
import { Form, Link, useNavigate } from "react-router-dom";
import { Input, notification } from "antd";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { isEmpty, isEmail } from "validator";

import { user as userAPI } from "../../API/index";

export default function Login() {
  const [api, contextHolder] = notification.useNotification();
  const [validation, setValidation] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateAll = () => {
    const msg = {};
    if (isEmpty(email)) {
      msg.email = "*Vui lòng nhập email";
    } else if (!isEmail(email)) {
      msg.email = "Email không hợp lệ";
    }
    if (isEmpty(password)) {
      msg.password = "*Vui lòng nhập mật khẩu";
    }
    setValidation(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    else {
      try {
        const result = await userAPI.login({
          email,
          password,
        });
      } catch (error) {
        api.open({
          type: "error",
          message: "Email hoặc mật khẩu không đúng.",
        });
      }
      const user = {
        email: email,
        password: password,
      };
      if (user.disbale) {
        api.open({
          type: "error",
          message: "Tài khoản bị khóa. Liên hệ Admin để mở!",
        });
      } else {
        loginUser(user, dispatch, navigate);
      }
    }
  };

  return (
    <div>
      {contextHolder}
      <div className="login">
        <Form className="form">
          <h1>ĐĂNG NHẬP</h1>
          <InputLabel className="label">Email(*)</InputLabel>
          <Input
            required
            type="email"
            placeholder="abc@gmail.com"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <p className="validation">{validation.email}</p>
          <InputLabel className="label">Mật Khẩu(*)</InputLabel>
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "8px",
                right: "8px",
              }}
            ></span>
            <Input
              required
              type="password"
              placeholder="********"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <p className="validation">{validation.password}</p>
          </div>
          <Button className="button" onClick={handleLogin}>
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
