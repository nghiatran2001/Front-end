import React, { useState } from "react";

import "./Register.css";
import { Button, Input, InputLabel } from "@mui/material";
import { notification } from "antd";
import { Form, Link } from "react-router-dom";

import { user as userAPI } from "../../API/index";
import { isEmpty, isEmail } from "validator";

export default function Register() {
  const [api, contextHolder] = notification.useNotification();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [phone, setPhone] = useState("");

  const [validation, setValidation] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(fullName)) {
      msg.fullName = "Vui lòng nhập tên";
    }
    if (isEmpty(email)) {
      msg.email = "Vui lòng nhập email";
    } else if (!isEmail(email)) {
      msg.email = "Email không hợp lệ";
    }
    if (isEmpty(password)) {
      msg.password = "Vui lòng nhập mật khẩu";
    }
    if (isEmpty(retypePassword)) {
      msg.retypePassword = "Vui lòng nhập lại mật khẩu";
    }
    if (isEmpty(phone)) {
      msg.phone = "Vui lòng nhập số điện thoại";
    }
    setValidation(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const register = async (e) => {
    e.preventDefault();

    const isValid = validateAll();
    if (!isValid) return;
    else {
      try {
        const result = await userAPI.register({
          name: fullName,
          email,
          password,
          phone,
        });
        if (result.status === 200) {
          api.open({
            type: "success",
            message: "Đăng ký thành công.",
          });
          setFullName("");
          setEmail("");
          setPassword("");
          setRetypePassword("");
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
    <div>
      {contextHolder}
      <div className="auth">
        <h1>ĐĂNG KÝ</h1>
        <Form className="form">
          <InputLabel className="label">Họ Tên</InputLabel>
          <Input
            required
            type="text"
            id="username"
            name="username"
            className="input"
            value={fullName}
            onChange={handleFullNameChange}
          ></Input>
          <p>{validation.fullName}</p>
          <InputLabel className="label">Email</InputLabel>
          <Input
            required
            type="email"
            id="email"
            name="email"
            className="input"
            value={email}
            onChange={handleEmailChange}
          ></Input>
          <p>{validation.email}</p>
          <InputLabel className="label">Mật Khẩu</InputLabel>
          <Input
            required
            type="password"
            id="password"
            name="password"
            className="input"
            value={password}
            onChange={handlePasswordChange}
          ></Input>
          <InputLabel className="label">Mật Khẩu</InputLabel>
          <Input
            required
            type="password"
            className="input"
            id="confirmPassword"
            name="confirmPassword"
            value={retypePassword}
            onChange={handleRetypePasswordChange}
          ></Input>
          <p>{validation.retypePassword}</p>
          <InputLabel className="label">Số Điện Thoại</InputLabel>
          <Input
            required
            type="phone"
            id="phone"
            name="phone"
            className="input"
            value={phone}
            onChange={handlePhoneChange}
          ></Input>
          <p>{validation.phone}</p>
          <Button className="button" onClick={register}>
            Đăng ký
          </Button>
          <span>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </span>
        </Form>
      </div>
    </div>
  );
}
