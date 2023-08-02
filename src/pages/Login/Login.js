import React from "react";
import Header from "../../conponent/Header/Header";
import Footer from "../../conponent/Footer/Footer";

import "./Login.css";
export default function Login() {
  return (
    <div>
      <Header />
      <div className="loginPage">
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
              <button className="btn_log" type="submit">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
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

              <button className="btn_log">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
