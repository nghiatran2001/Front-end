import React from "react";
import { Button, Input, InputLabel } from "@mui/material";
import "./Login.css";

import { Form, Link } from "react-router-dom";

export default function Login() {
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
          <Input
            required
            type="password"
            placeholder="********"
            className="input"
          ></Input>
          <Button className="button">Đăng nhập</Button>
          <span>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </span>
        </Form>
      </div>
    </div>
  );
}
