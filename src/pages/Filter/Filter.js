import { Box, Typography } from "@mui/material";
import Admin from "../Admin/Admin";
import "./Filter.css";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { user as userAPI } from "../../API";
import { payment as paymentAPI } from "../../API";
import { cart as cartAPI } from "../../API";

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

export default function Filter() {
  const user = useSelector((state) => state.auth.login?.currentUser);

  const [userList, setUserList] = useState([]);
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    (async () => {
      await getUserList();
    })();
  }, []);

  const getUserList = async () => {
    try {
      const result = await userAPI.getUserList({ token: user?.accessToken });
      setUserList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  let demUser = 0;
  userList.map((e) => {
    if (!e.role) {
      return demUser++;
    }
  });

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
  let demOrderSuccess = 0;
  let demTotalOrder = 0;
  order.map((e) => {
    if (e.status === "Đã giao") {
      return demOrderSuccess++;
    }
  });
  order.map((e) => {
    if (e.status === "Đã hủy") {
      return;
    } else {
      return demTotalOrder++;
    }
  });

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      const result = await cartAPI.getProducts({ email: user?.email });
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  let totalOrder = 0;

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
            height: "100%",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ maxWidth: "1200px" }}>
          <Typography variant="h5" sx={{ margin: 5 }}>
            <h2>THỐNG KÊ</h2>
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ paddingRight: 10, paddingLeft: 10 }}>
              <Typography>
                <h2>Người dùng đã đăng ký</h2>
              </Typography>
              <Typography align="center">
                <h2>{demUser}</h2>
              </Typography>
            </Box>
            <Box sx={{ paddingRight: 10, paddingLeft: 10 }}>
              <Typography>
                <h2>Đơn hàng đã giao</h2>
              </Typography>
              <Typography align="center">
                <h2>
                  {" "}
                  {demOrderSuccess}/{demTotalOrder}
                </h2>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingRight: 10, paddingLeft: 10 }}>
            <Typography>
              <h2>Doanh số đã bán</h2>
            </Typography>
            <TableContainer sx={{ maxWidth: "1000px", borderRadius: 5 }}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Mã đơn hàng</StyledTableCell>
                    <StyledTableCell>Tài khoản </StyledTableCell>
                    <StyledTableCell>Thành Tiền</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.map((o, i) => {
                    if (o.status === "Đã giao") {
                      totalOrder = totalOrder + parseInt(o.total);
                      return (
                        <StyledTableRow key={i}>
                          <StyledTableCell>{o._id}</StyledTableCell>
                          <StyledTableCell>{o.email}</StyledTableCell>
                          <StyledTableCell>
                            {VND.format(o.total)}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    } else {
                      return;
                    }
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <h2>Tổng Doanh Thu: {VND.format(totalOrder)}</h2>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
