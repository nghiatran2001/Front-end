import React, { useEffect, useState } from "react";
import "./Cart.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { cart as cartAPI, product as productAPI } from "../../API";

export default function Cart() {
  const [listCart, setListCart] = useState([]);
  const [product, setProduct] = useState([]);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    (async () => {
      await getCartList();
    })();
  }, []);
  const getCartList = async () => {
    try {
      const result = await cartAPI.getCartList();
      setListCart(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const array = [];
  useEffect(() => {
    (async () => {
      await getIdProduct();
    })();
  }, [listCart]);
  const getIdProduct = async () => {
    try {
      listCart?.map(async (idP) => {
        const result = await productAPI.getIdProduct({
          id: idP.idProduct,
        });
        setProduct(result.data);
        // array.push(result.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(product);
  array.push(product._id);
  // console.log(array);

  return (
    <div className="cart">
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
                <h3>Đơn giá</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Thành tiền</h3>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listCart?.map((cart, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{cart.nameProduct}</TableCell>
                  <TableCell>
                    <img
                      className="image-cart"
                      src={cart.image}
                      alt=""
                      align="center"
                    ></img>
                  </TableCell>
                  <TableCell align="center">{cart.quantity}</TableCell>
                  <TableCell align="center">{VND.format(cart.price)}</TableCell>
                  <TableCell align="right">
                    {VND.format(cart.quantity * cart.price)}
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained">Xóa</Button>
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
                <h3>Tổng tiền:</h3>
              </TableCell>
              <TableCell align="right">{VND.format()}</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              <Link to="/order">
                <Button variant="contained">Lập hóa đơn</Button>
              </Link>
            </TableCell>
            <TableCell></TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
