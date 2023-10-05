import React, { useEffect, useState } from "react";
import "./Cart.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../../images/1.png";

import { cart as cartAPI } from "../../API";

export default function Cart() {
  const [listCart, setListCart] = useState([]);
  useEffect(() => {
    (async () => {
      await getCategoryList();
    })();
  }, []);
  const getCategoryList = async () => {
    try {
      const result = await cartAPI.getCartList();
      setListCart(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
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
              <TableCell align="right">
                <h3>Số lượng</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Đơn giá</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Thành tiền</h3>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Dell Vostro</TableCell>
              <TableCell>
                <img className="image-cart" src={image} alt=""></img>
              </TableCell>
              <TableCell align="right">
                <Input
                  type="number"
                  slotProps={{
                    input: {
                      min: 1,
                      max: 5,
                      step: 1,
                    },
                  }}
                  defaultValue={1}
                />
              </TableCell>
              <TableCell align="right">{VND.format(10000000)}</TableCell>
              <TableCell align="right">{VND.format(10000000)}</TableCell>
              <TableCell align="right">
                <Button variant="contained">Xóa</Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dell Vostro</TableCell>
              <TableCell>
                <img className="image-cart" src={image} alt=""></img>
              </TableCell>
              <TableCell align="right">
                <Input
                  type="number"
                  slotProps={{
                    input: {
                      min: 1,
                      max: 5,
                      step: 1,
                    },
                  }}
                  defaultValue={1}
                />
              </TableCell>
              <TableCell align="right">{VND.format(10000000)}</TableCell>
              <TableCell align="right">{VND.format(10000000)}</TableCell>
              <TableCell align="right">
                <Button variant="contained">Xóa</Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <h3>Tổng tiền:</h3>
              </TableCell>
              <TableCell align="right">{VND.format(20000000)}</TableCell>
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
