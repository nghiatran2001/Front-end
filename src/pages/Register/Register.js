import React, { useState } from "react";
import "./Register.css";

import { Button, InputLabel } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input } from "antd";

export default function Register() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="register">
        <Form className="form">
          <h1>ĐĂNG KÝ</h1>
          <InputLabel className="label">Họ Tên</InputLabel>
          <Input
            required
            placeholder="Your Name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          {/* <p style={{ color: "red" }}>{validation.name}</p> */}
          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            placeholder="abc@gmail.com"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          {/* <p>{validation.email}</p> */}
          <InputLabel className="label">Mật Khẩu</InputLabel>
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
            {/* <p>{validation.password}</p> */}
          </div>
          <InputLabel className="label">Nhập lại mật Khẩu</InputLabel>
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
            {/* <p>{validation.confirmPassword}</p> */}
          </div>
          <InputLabel className="label">Số Điện Thoại</InputLabel>
          <Input
            required
            placeholder="093 xxx xxxx"
            type="phone"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
          {/* <p>{validation.phone}</p> */}
          <Button className="button">Đăng ký</Button>
          <span>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </span>
        </Form>
      </div>
    </>
  );
}
