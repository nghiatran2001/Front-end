import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { notification } from "antd";

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

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    background: "white",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UpdateOrderAdmin() {
  const [api, contextHolder] = notification.useNotification();
  const keyValue = window.location.search;
  const urlParams = new URLSearchParams(keyValue);
  const idOrder = urlParams.get("idOrder");

  const [order, setOrder] = useState([]);

  const handleUpdateOrder = async () => {
    try {
      if (order.status === "") {
        api.open({
          type: "error",
          message: "Vui lòng chọn trạng thái.",
        });
      } else {
        const result = await paymentAPI.editOrder(order);
        api.open({
          type: "success",
          message: "Sửa trạng thái thành công.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getIdOrder();
    })();
  }, []);
  const getIdOrder = async () => {
    try {
      const result = await paymentAPI.getIdOrder({ id: idOrder });
      setOrder(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(order);

  return (
    <div>
      {contextHolder}
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
            height: "100vh",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Sửa đơn hàng
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/orderadmin">
                <Button variant="contained">Danh sách đơn hàng</Button>
              </Link>
            </Typography>
          </Box>
          <TableContainer
            sx={{
              minWidth: 600,
              border: 1,
              borderRadius: 5,
            }}
            aria-label="customized table"
          >
            <Table>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Trạng Thái:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      value={order.status || ""}
                      onChange={(e) =>
                        setOrder((pre) => ({
                          ...pre,
                          status: e.target.value,
                        }))
                      }
                    >
                      <option>Đã xác nhận</option>
                      <option>Đang giao</option>
                      <option>Đã giao</option>
                      <option>Đã hủy</option>
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      onClick={() => handleUpdateOrder()}
                    >
                      Sửa đơn hàng
                    </Button>
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
