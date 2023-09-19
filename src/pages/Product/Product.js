import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Admin from "../Admin/Admin";
import logo from "../../images/dell-vostro-3400.png";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import { product as productAPI, category as categoryAPI } from "../../API";

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

export default function Product() {
  const [listCategory, setListCategory] = useState([]);
  const [layId, setLayId] = useState("");
  useEffect(() => {
    (async () => {
      await getCategoryList();
    })();
  }, []);
  const getCategoryList = async () => {
    try {
      const result = await categoryAPI.getCategoryList();
      setListCategory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

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
            height: "1200px",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Danh sách sản phẩm
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/addproduct">
                <Button variant="contained">Thêm sản phẩm</Button>
              </Link>
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>STT</StyledTableCell>
                  <StyledTableCell>Tên sản phẩm</StyledTableCell>
                  <StyledTableCell>Hình ảnh</StyledTableCell>
                  <StyledTableCell>Giá gốc</StyledTableCell>
                  <StyledTableCell>Giá bán</StyledTableCell>
                  <StyledTableCell>Số lượng kho</StyledTableCell>
                  <StyledTableCell>Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    1
                  </StyledTableCell>
                  <StyledTableCell>HP Dark</StyledTableCell>
                  <StyledTableCell>
                    <img src={logo} alt="" height="100px"></img>
                  </StyledTableCell>
                  <StyledTableCell>13.000.000</StyledTableCell>
                  <StyledTableCell>10.000.000</StyledTableCell>
                  <StyledTableCell>5</StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Sửa
                    </Button>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Xóa
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    1
                  </StyledTableCell>
                  <StyledTableCell>Dell Vostro</StyledTableCell>
                  <StyledTableCell>
                    <img src={logo} alt="" height="100px"></img>
                  </StyledTableCell>
                  <StyledTableCell>10.000.000</StyledTableCell>
                  <StyledTableCell>8.000.000</StyledTableCell>
                  <StyledTableCell>10</StyledTableCell>
                  <StyledTableCell>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Sửa
                    </Button>
                    <Button sx={{ marginRight: 2 }} variant="contained">
                      Xóa
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
