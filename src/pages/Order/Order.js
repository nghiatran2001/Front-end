import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputBase,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Order() {
  return (
    <div>
      <Box sx={{ background: "white" }}>
        <TableContainer sx={{ display: "flex", marginTop: 5 }}>
          <Table
            sx={{ maxWidth: "50%", margin: 5, border: 2 }}
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
                <TableCell align="right">
                  <h3>Tổng</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Laptop Dell</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">100</TableCell>
                <TableCell align="right">100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Laptop Dell</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">100</TableCell>
                <TableCell align="right">100</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Tổng cộng:</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">200</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <FormControl
            sx={{
              border: 2,
              width: "40%",
              margin: 5,
            }}
          >
            <h1 style={{ textAlign: "center" }}>Thông tin người nhận</h1>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Họ tên:
              <TextField style={{ paddingLeft: 52 }}></TextField>
              <InputBase></InputBase>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Số điện thoại: <TextField></TextField>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Email:
              <TextField style={{ paddingLeft: 60 }}></TextField>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Địa chỉ:
              <TextField style={{ paddingLeft: 50 }}></TextField>
            </FormLabel>
            <FormLabel sx={{ padding: 2, color: "black" }}>
              Nội dung:
              <TextField style={{ paddingLeft: 35 }}></TextField>
            </FormLabel>
          </FormControl>
        </TableContainer>
        <Box sx={{ margin: 10, marginTop: -3 }}>
          <h2>
            <span>Hình thức thanh toán: </span>
            <select style={{ fontSize: "20px" }}>
              <option>Paypal</option>
              <option>Momo</option>
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
