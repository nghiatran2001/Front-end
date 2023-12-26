import { Box, Button, FormControl, FormLabel, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Order.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { notification } from "antd";

import { user as userAPI } from "../../API";
import { order as orderAPI } from "../../API";
import { payment as paymentAPI } from "../../API";

export default function Order() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [order, setOrder] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [content, setContent] = useState("");

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    (async () => {
      await getIdUser();
    })();
  }, []);

  const getIdUser = async () => {
    try {
      const result = await userAPI.getIdUser({ id: user._id });
      setUserId(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getOrders();
    })();
  }, []);

  const getOrders = async () => {
    try {
      const result = await orderAPI.getEmail({ email: user.email });
      setOrder(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    try {
      const result = await paymentAPI.addOrder({
        order: order[0].orderArray,
        name,
        phone,
        email,
        content,
        address,
      });
      if (result.status === 200) {
        navigate("/");
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Thất bại.",
      });
      console.log(error);
    }
  };

  console.log(order);
  return (
    <div>
      {contextHolder}
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
                  <h3>Thành tiền</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((e) => {
                return e.orderArray.map((o, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{o.nameProduct}</TableCell>
                      <TableCell align="center">{o.quantity}</TableCell>
                      <TableCell align="right">
                        {VND.format(o.sellPrice)}
                      </TableCell>
                      <TableCell align="right">
                        {VND.format(o.quantity * o.sellPrice)}
                      </TableCell>
                    </TableRow>
                  );
                });
              })}
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <h3>Tổng tiền:</h3>
                </TableCell>
                <TableCell align="right">{VND.format(10000000)}</TableCell>
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
              Họ tên:{" "}
              <TextArea
                className="info"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextArea>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Số điện thoại:{" "}
              <TextArea
                className="info"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TextArea>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Email:{" "}
              <TextArea
                className="info"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextArea>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              <span>
                Địa chỉ:
                <TextArea
                  className="info"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></TextArea>
              </span>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              <span>
                Nội dung:
                <TextArea
                  className="info"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></TextArea>
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
            <Link to="/payment" className="order-link" onClick={handleAddOrder}>
              thanh toán
            </Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
