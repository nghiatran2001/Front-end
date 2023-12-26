import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Cart.css";
import Delete from "@mui/icons-material/DeleteForeverOutlined";
import { Popconfirm } from "antd";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { notification } from "antd";

import { cart as cartAPI } from "../../API";
import { order as orderAPI } from "../../API";

export default function Cart() {
  const [product, setProduct] = useState([]);

  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const cancel = (e) => {};

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      const result = await cartAPI.getProducts({ email: user.email });
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  var total = 0;
  product.forEach((e) => {
    total += e.sellPrice;
  });

  const handleDeleteProduct = async (id) => {
    try {
      const result = await cartAPI.deleteProduct({
        id,
      });
      if (result.status === 200) {
        await getProducts();
        api.open({
          type: "success",
          message: "Xóa thành công.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const arr = [];
  product.map((e) => {
    arr.push(e);
  });

  const handleAddArray = async (e) => {
    e.preventDefault();
    try {
      const result = await orderAPI.addArray({
        orderArray: arr,
        email: user.email,
      });
      if (result.status === 200) {
        navigate(`/order?email=${user.email}`);
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Thất bại.",
      });
      console.log(error);
    }
  };

  return (
    <div className="cart">
      {contextHolder}
      <TableContainer className="cart-bg">
        <Table
          sx={{
            maxWidth: "85%",
            margin: 10,
            borderRadius: 10,
            background: "white",
          }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                <h1>Chi tiết giỏ hàng</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h3>Tên sản phẩm</h3>
              </TableCell>
              <TableCell>
                <h3>Hình ảnh</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Số lượng</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Tồn kho</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Đơn giá</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Thành tiền</h3>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((product) => {
              return (
                <TableRow key={product.idProduct}>
                  <TableCell>{product.nameProduct}</TableCell>
                  <TableCell>
                    <img
                      className="image-cart"
                      src={product.image}
                      alt=""
                      align="center"
                    ></img>
                  </TableCell>
                  <TableCell align="center" className="btn">
                    <button className="btn-cart">-</button>
                    <span className="btn-quantity">{product.quantity}</span>
                    <button className="btn-cart">+</button>
                  </TableCell>
                  <TableCell align="center" className="btn">
                    <span className="btn-quantity">{product.amount}</span>
                  </TableCell>
                  <TableCell align="center">
                    {VND.format(product.sellPrice)}
                  </TableCell>
                  <TableCell align="right">
                    {VND.format(product.quantity * product.sellPrice)}
                  </TableCell>
                  <TableCell align="right" className="cart-delete">
                    <Popconfirm
                      onConfirm={() => handleDeleteProduct(product._id)}
                      title="Xóa"
                      description="Bạn chắc chắn muốn xóa?"
                      onCancel={cancel}
                      okText="Có"
                      cancelText="Không"
                    >
                      <Delete></Delete>
                    </Popconfirm>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <h3>Tổng tiền: </h3>
              </TableCell>
              <TableCell align="right">{VND.format(total)}</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              <Link to="/order">
                <Button variant="contained" onClick={handleAddArray}>
                  Lập hóa đơn
                </Button>
              </Link>
            </TableCell>
            <TableCell></TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
