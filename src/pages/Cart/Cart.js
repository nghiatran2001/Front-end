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

import { cart as cartAPI } from "../../API";
import { useSelector } from "react-redux";

export default function Cart() {
  const [product, setProduct] = useState([]);

  const user = useSelector((state) => state.auth.login?.currentUser);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

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

  const handleTru = (e) => {
    e.quantity++;
    console.log(e);
  };
  const handleCong = (e) => {
    e.quantity--;
    console.log(e);
  };

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
                    <button
                      className="btn-cart"
                      onClick={(e) => handleTru(product)}
                    >
                      -
                    </button>
                    <span className="btn-quantity">{product.quantity}</span>
                    <button
                      className="btn-cart"
                      onClick={(e) => handleCong(product.quan)}
                    >
                      +
                    </button>
                  </TableCell>
                  <TableCell align="center">
                    {VND.format(product.sellPrice)}
                  </TableCell>
                  <TableCell align="right">
                    {VND.format(product.quantity * product.sellPrice)}
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
