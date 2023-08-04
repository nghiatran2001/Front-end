import React from "react";

import "./Register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div>
      <div className="loginPage">
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
      </div>
    </div>
  );
}
