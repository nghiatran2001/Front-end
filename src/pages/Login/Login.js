import React, { useState } from "react";
import { Button, InputLabel } from "@mui/material";
import "./Login.css";
import { Form, Link, useNavigate } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    loginUser(user, dispatch, navigate);
  };
  return (
    <div>
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
          <InputLabel className="label">Mật Khẩu(*)</InputLabel>
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "8px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <Input
              required
              type={isShowPassword ? "text" : "password"}
              placeholder="********"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
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
