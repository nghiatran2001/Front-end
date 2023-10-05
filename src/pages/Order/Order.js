import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputBase,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

export default function Order() {
  const user = useSelector((state) => state.auth.login?.currentUser);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <Box className="order-bg">
        <TableContainer sx={{ display: "flex" }}>
          <Table
            sx={{
              maxWidth: "50%",
              margin: 5,
              background: "white",
              borderRadius: 10,
            }}
            aria-label="spanning table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  <h1>Thông tin đơn hàng</h1>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <h3>Tên sản phẩm</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Số lượng</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Đơn giá</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>Tổng</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Laptop Dell</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="right">{VND.format(10000000)}</TableCell>
                <TableCell align="right">{VND.format(10000000)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Laptop Dell</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="right">{VND.format(10000000)}</TableCell>
                <TableCell align="right">{VND.format(10000000)}</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <h3>Tổng tiền:</h3>
                </TableCell>
                <TableCell align="right">{VND.format(20000000)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <FormControl
            sx={{
              background: "white",
              borderRadius: 10,
              width: "40%",
              margin: 5,
            }}
          >
            <h1 style={{ textAlign: "center" }}>Thông tin người nhận</h1>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Họ tên: <span className="info">{user.name}</span>
              <InputBase>1</InputBase>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Số điện thoại: <span className="info">{user.phone}</span>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Email: <span className="info">{user.email}</span>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              <span>
                Địa chỉ:
                <TextArea></TextArea>
              </span>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              <span>
                Nội dung:
                <TextArea></TextArea>
              </span>
            </FormLabel>
          </FormControl>
        </TableContainer>
        <Box className="order-pay">
          <h2>
            <span>Hình thức thanh toán: </span>
            <select style={{ fontSize: "20px" }}>
              <option>Paypal</option>
              <option>CoD</option>
            </select>
          </h2>
          <Button variant="contained">
            <Link to="/payment" className="order-link">
              thanh toán
            </Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
