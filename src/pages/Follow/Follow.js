import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Follow.css";

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
export default function Follow() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box className="follow">
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Typography variant="h5" sx={{ marginBottom: 5 }}>
            <h3>Tra cứu đơn hàng</h3>
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 5 }}>
            <h3>Danh sách đơn hàng</h3>
          </Typography>
          <Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              textColor="red"
              indicatorColor="secondary"
            >
              <Tab className="follow-tab" label="Tất cả"></Tab>
              <Tab className="follow-tab" label="Đang xử lý"></Tab>
              <Tab className="follow-tab" label="Đã xác nhận"></Tab>
              <Tab className="follow-tab" label="Đang giao"></Tab>
              <Tab className="follow-tab" label="Đã giao"></Tab>
            </Tabs>
          </Typography>
          <TableContainer component={Paper} className="follow-table">
            <Table sx={{ minWidth: 1100 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Mã đơn hàng</StyledTableCell>
                  <StyledTableCell>Họ Tên</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Số Điện Thoại</StyledTableCell>
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
                  <StyledTableCell>huunghia@gnail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained">Xem chi tiết</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Huỷ đơn
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gnail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained">Xem chi tiết</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Huỷ đơn
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gnail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained">Xem chi tiết</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Huỷ đơn
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Ma45465454
                  </StyledTableCell>
                  <StyledTableCell>Huu Nghia</StyledTableCell>
                  <StyledTableCell>huunghia@gnail.com</StyledTableCell>
                  <StyledTableCell>092323232</StyledTableCell>
                  <StyledTableCell>Đang xử lý</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained">Xem chi tiết</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Huỷ đơn
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
