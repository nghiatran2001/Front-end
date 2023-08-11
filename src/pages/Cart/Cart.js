import React from "react";
import "./Cart.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div className="cart">
      <TableContainer component={Paper}>
        <Table
          sx={{ maxWidth: "85%", margin: 10, border: 2 }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                <h1>Chi tiết sản phẩm</h1>
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
                <h3>Tổng</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Thao tác</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Laptop Dell</TableCell>
              <TableCell>Hình</TableCell>
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
                />
              </TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">
                <Button variant="contained">Xóa</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Laptop Dell</TableCell>
              <TableCell>Hình</TableCell>
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
                />
              </TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">
                <Button variant="contained">Xóa</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table
          sx={{ maxWidth: "30%", margin: 10, border: 2 }}
          aria-label="spanning table"
        >
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Tổng phụ:</TableCell>
              <TableCell align="right">100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Tổng cộng:</TableCell>
              <TableCell align="right">105</TableCell>
            </TableRow>
            <TableCell align="right">
              <Link to="/order">
                <Button variant="contained">Tiếp tục thanh toán</Button>
              </Link>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
