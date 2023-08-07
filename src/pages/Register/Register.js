import React from "react";

import "./Register.css";
import { Button, Input, InputLabel } from "@mui/material";

import { Form, Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="register">
        <h1>ĐĂNG KÝ</h1>
        <Form className="form">
          <InputLabel className="label">Họ Tên</InputLabel>
          <Input
            required
            type="text"
            id="username"
            name="username"
            className="input"
          ></Input>

          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            type="email"
            id="email"
            name="email"
            className="input"
          ></Input>

          <InputLabel className="label">Mật Khẩu</InputLabel>
          <Input
            required
            type="password"
            id="password"
            name="password"
            className="input"
          ></Input>

          <InputLabel className="label">Nhập lại mật Khẩu</InputLabel>
          <Input
            required
            type="password"
            className="input"
            id="confirmPassword"
            name="confirmPassword"
          ></Input>

          <InputLabel className="label">Số Điện Thoại</InputLabel>
          <Input
            required
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
