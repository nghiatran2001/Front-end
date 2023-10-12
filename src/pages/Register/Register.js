import React, { useState } from "react";
import "./Register.css";

import { Button, InputLabel } from "@mui/material";
import { Form, Link } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Input, notification } from "antd";

import { isEmpty, isEmail } from "validator";
import { user as userAPI } from "../../API/index";

export default function Register() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const [validation, setValidation] = useState("");

  const validateAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = "*Vui lòng nhập họ tên";
    }
    if (isEmpty(email)) {
      msg.email = "*Vui lòng nhập email";
    } else if (!isEmail(email)) {
      msg.email = "Email không hợp lệ";
    }
    if (isEmpty(password)) {
      msg.password = "*Vui lòng nhập mật khẩu";
    }
    if (isEmpty(confirmPassword)) {
      msg.confirmPassword = "*Vui lòng nhập xác nhận mật khẩu";
    } else if (confirmPassword !== password) {
      msg.confirmPassword = "*Xác nhận mật khẩu không đúng";
    }
    if (isEmpty(phone)) {
      msg.phone = "*Vui lòng nhập số điện thoại";
    }
    setValidation(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    else {
      try {
        const result = await userAPI.register({
          name,
          email,
          password,
          phone,
        });
        if (result.status === 200) {
          api.open({
            type: "success",
            message: "Đăng ký thành công.",
          });
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setPhone("");
        }
      } catch (error) {
        api.open({
          type: "error",
          message: "Email đã tồn tại.",
        });
      }
    }
  };
  return (
    <>
      {contextHolder}
      <div className="register">
        <Form className="form">
          <h1>ĐĂNG KÝ</h1>
          <InputLabel className="label">Họ Tên(*)</InputLabel>
          <Input
            required
            placeholder="Your Name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <p className="validate">{validation.name}</p>
          <InputLabel className="label">Email(*)</InputLabel>
          <Input
            required
            placeholder="abc@gmail.com"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <p className="validate">{validation.email}</p>
          <InputLabel className="label">Mật Khẩu(*)</InputLabel>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <p className="validate">{validation.password}</p>
          </div>

          <InputLabel className="label">Xác Nhận Mật Khẩu(*)</InputLabel>
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
            <p className="validate">{validation.confirmPassword}</p>
          </div>

          <InputLabel className="label">Số Điện Thoại(*)</InputLabel>
          <Input
            required
            placeholder="093 xxx xxxx"
            type="phone"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Input>
          <p className="validate">{validation.phone}</p>
          <Button className="button" onClick={handleRegister}>
            Đăng ký
          </Button>
          <span>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </span>
        </Form>
      </div>
    </>
  );
}
