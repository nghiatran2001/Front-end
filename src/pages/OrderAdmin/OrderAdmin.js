import React from "react";
import { Box, Button, Typography } from "@mui/material";
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function OrderAdmin() {
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
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gmail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>180 Cao Lỗ, Q8</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell align="center">
                    <See className="orderadm-delete"></See>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Link to="/updateorderadmin">
                      <Update className="orderadm-delete"></Update>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gmail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>180 Cao Lỗ, Q8</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell align="center">
                    <See className="orderadm-delete"></See>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Update className="orderadm-delete"></Update>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gmail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>180 Cao Lỗ, Q8</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell align="center">
                    <See className="orderadm-delete"></See>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Update className="orderadm-delete"></Update>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gmail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>180 Cao Lỗ, Q8</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell align="center">
                    <See className="orderadm-delete"></See>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Update className="orderadm-delete"></Update>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gmail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>180 Cao Lỗ, Q8</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell align="center">
                    <See className="orderadm-delete"></See>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Update className="orderadm-delete"></Update>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
