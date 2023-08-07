import React from "react";
import { Button, Input, InputLabel } from "@mui/material";
import "./Login.css";

import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="auth">
        <h1>ĐĂNG NHẬP</h1>
        <Form className="form">
          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            type="email"
            placeholder="Email"
            className="input"
          ></Input>
          <InputLabel className="label">Mật Khẩu</InputLabel>
          <Input
            required
            type="password"
            placeholder="Mật khẩu"
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
