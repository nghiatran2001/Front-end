import React, { useState } from "react";
import "./Register.css";

import { Button, InputLabel } from "@mui/material";
import { Form, Link, useNavigate } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/apiRequest";

export default function Register() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    registerUser(user, dispatch, navigate);
  };
  return (
    <>
      <div className="register">
        <Form className="form">
          <h1>ĐĂNG KÝ</h1>
          <InputLabel className="label">Họ Tên(*)</InputLabel>
          <Input
            required
            placeholder="Your Name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>

          <InputLabel className="label">Email(*)</InputLabel>
          <Input
            required
            placeholder="abc@gmail.com"
            type="email"
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
              placeholder="********"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </div>

          <InputLabel className="label">Số Điện Thoại(*)</InputLabel>
          <Input
            required
            placeholder="093 xxx xxxx"
            type="phone"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>

          <Button className="button" onClick={handleRegister}>
            Đăng ký
          </Button>
          <span>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </span>
        </Form>
      </div>
    </>
  );
}
