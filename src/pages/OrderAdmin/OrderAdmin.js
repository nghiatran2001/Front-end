import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Admin from "../Admin/Admin";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Update from "@mui/icons-material/ConstructionOutlined";
import See from "@mui/icons-material/VisibilityOutlined";
import "./OrderAdmin.css";
import { Link } from "react-router-dom";

import { payment as paymentAPI } from "../../API";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function OrderAdmin() {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [order, setOrder] = useState([]);

  useEffect(() => {
    (async () => {
      await getOrders();
    })();
  }, []);

  const getOrders = async () => {
    try {
      const result = await paymentAPI.getList();
      setOrder(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(order);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 250,
            bgcolor: "#999999",
            height: "100%",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Typography variant="h5" sx={{ marginBottom: 5 }}>
            Danh sách đơn hàng
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Mã Đơn Hàng</StyledTableCell>
                  <StyledTableCell>Người Nhận</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Số Điện Thoại</StyledTableCell>
                  <StyledTableCell>Địa chỉ</StyledTableCell>
                  <StyledTableCell>Trạng thái</StyledTableCell>
                  <StyledTableCell>Chi tiết sản phẩm</StyledTableCell>
                  <StyledTableCell>Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((o, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {o._id}
                      </StyledTableCell>
                      <StyledTableCell>{o.name}</StyledTableCell>
                      <StyledTableCell>{o.email}</StyledTableCell>
                      <StyledTableCell>{o.phone}</StyledTableCell>
                      <StyledTableCell>{o.address}</StyledTableCell>
                      <StyledTableCell>{o.status}</StyledTableCell>
                      <StyledTableCell align="center">
                        <See className="orderadm-delete"></See>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                          <Update className="orderadm-delete"></Update>
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
