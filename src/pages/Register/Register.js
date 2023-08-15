import React, { useState } from "react";
import "./Register.css";
import { Button, InputLabel } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input } from "antd";

export default function Register() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div>
      <div className="register">
        <Form className="form">
          <h1>XIN CHÀO ĐĂNG KÝ TẠI ĐÂY!</h1>
          <InputLabel className="label">Họ Tên</InputLabel>
          <Input
            required
            placeholder="Nghia Tran"
            type="text"
            id="username"
            name="username"
            className="input"
          ></Input>

          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            placeholder="abc@gmail.com"
            type="email"
            id="email"
            name="email"
            className="input"
          ></Input>

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
              id="password"
              name="password"
              className="input"
            ></Input>
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
              id="confirmPassword"
              name="confirmPassword"
            ></Input>
          </div>
          <InputLabel className="label">Số Điện Thoại</InputLabel>
          <Input
            required
            placeholder="093 xxx xxxx"
            type="phone"
            id="phone"
            name="phone"
            className="input"
          ></Input>

          <Button className="button">Đăng ký</Button>
          <span>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </span>
        </Form>
      </div>
    </div>
  );
}
