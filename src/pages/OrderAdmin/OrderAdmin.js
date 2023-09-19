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
                    <p>Tên: ưqeqw</p>
                    <p>Số lượng: 1</p>
                    <p>Đơn giá: 424242</p>
                    <p>Tổng tiền: 42112421</p>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Cập nhật
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
                    <p>Tên: ưqeqw</p>
                    <p>Số lượng: 1</p>
                    <p>Đơn giá: 424242</p>
                    <p>Tổng tiền: 42112421</p>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Cập nhật
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
                    <p>Tên: ưqeqw</p>
                    <p>Số lượng: 1</p>
                    <p>Đơn giá: 424242</p>
                    <p>Tổng tiền: 42112421</p>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Cập nhật
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
                    <p>Tên: ưqeqw</p>
                    <p>Số lượng: 1</p>
                    <p>Đơn giá: 424242</p>
                    <p>Tổng tiền: 42112421</p>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Cập nhật
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
                    <p>Tên: ưqeqw</p>
                    <p>Số lượng: 1</p>
                    <p>Đơn giá: 424242</p>
                    <p>Tổng tiền: 42112421</p>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Cập nhật
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
                    <p>Tên: ưqeqw</p>
                    <p>Số lượng: 1</p>
                    <p>Đơn giá: 424242</p>
                    <p>Tổng tiền: 42112421</p>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Cập nhật
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
