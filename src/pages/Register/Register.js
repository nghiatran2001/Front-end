import React from "react";

import "./Register.css";
import { Form, Link } from "react-router-dom";
import { Button, Input, InputLabel } from "@mui/material";
export default function Register() {
  return (
    <div>
      {/* <div className="loginPage">
        <div className="loginPage_left">
          <h2>Đăng Ký</h2>
          <div className="form_left">
            <form>
              <div className="formControl">
                <label htmlFor="username">Họ Tên(*)</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="formControl">
                <label htmlFor="email">Email(*)</label>
                <input type="text" id="emailRegister" name="email" />
              </div>
              <div className="formControl">
                <label htmlFor="password">Mật khẩu(*)</label>
                <input type="password" id="passwordRegister" name="password" />
              </div>
              <div className="formControl">
                <label htmlFor="confirmPassword">Nhập lại mật khẩu(*)</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
              <div className="formControl">
                <label htmlFor="phone">Số điện thoại(*)</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <div>
                Bạn đã có tài khoản? <Link to="/login">đăng nhập</Link>
              </div>
              <button className="btn_log">Đăng ký</button>
            </form>
          </div>
        </div>
      </div> */}
      <div className="auth">
        <h1>ĐĂNG KÝ</h1>
        <Form className="form">
          <InputLabel className="label">Họ Tên</InputLabel>
          <Input
            required
            type="text"
            placeholder="Họ tên"
            className="input"
          ></Input>
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
          <InputLabel className="label">Số Điện Thoại</InputLabel>
          <Input
            required
            type="phone"
            placeholder="Số điện thoại"
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
