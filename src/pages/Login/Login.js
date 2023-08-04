import React from "react";

import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
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
              <div>
                Bạn chưa có tài khoản? <Link to="/register">đăng ký</Link>
              </div>
              <button className="btn_log" type="submit">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
