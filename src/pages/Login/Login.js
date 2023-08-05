import React from "react";
import { Button, Input, InputLabel } from "@mui/material";
import "./Login.css";
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      {/* <div className="loginPage">
        <div className="loginPage_right">
          <h2>Đăng nhập</h2>
          <div className="form_right">
            <form>
              <div className="formControl">
                <label htmlFor="email">Email(*)</label>
                <input type="text" id="emailLogin" name="email" />
              </div>
              <div className="formControl">
                <label htmlFor="password">Mật khẩu(*)</label>
                <input type="password" id="passwordLogin" name="password" />
              </div>
              <div>
                Bạn chưa có tài khoản? <Link to="/register">đăng ký</Link>
              </div>
              <button className="btn_log" type="submit">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div> */}
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
