import React, { useState } from "react";
import { Button, InputLabel } from "@mui/material";
import "./Login.css";
import { Form, Link } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input } from "antd";
export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div>
      <div className="login">
        <Form className="form">
          <h1>ĐĂNG NHẬP VÀO TRANG WEB</h1>
          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            type="email"
            placeholder="abc@gmail.com"
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
              type={isShowPassword ? "text" : "password"}
              placeholder="********"
              className="input"
            ></Input>
          </div>
          <Button className="button">Đăng nhập</Button>
          <span>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </span>
        </Form>
      </div>
    </div>
  );
}
