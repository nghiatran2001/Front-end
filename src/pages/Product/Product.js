import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Admin from "../Admin/Admin";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import { product as productAPI } from "../../API";
import { Popconfirm, notification } from "antd";

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
  const [listProduct, setListProduct] = useState([]);

  const [api, contextHolder] = notification.useNotification();

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const handleDeleteProduct = async (id) => {
    try {
      const result = await productAPI.deleteProduct({
        id,
      });
      if (result.status === 200) {
        await getProductList();
        api.open({
          type: "success",
          message: "Xóa thành công.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const cancel = (e) => {};

  useEffect(() => {
    (async () => {
      await getProductList();
    })();
  }, []);
  const getProductList = async () => {
    try {
      const result = await productAPI.getProductList();
      setListProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

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
            height: "100%",
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
                  <StyledTableCell align="center">STT</StyledTableCell>
                  <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
                  <StyledTableCell align="center">Slug</StyledTableCell>
                  <StyledTableCell align="center">Hình ảnh</StyledTableCell>
                  <StyledTableCell align="center">Hãng</StyledTableCell>
                  <StyledTableCell align="center">Giá gốc</StyledTableCell>
                  <StyledTableCell align="center">Giá bán</StyledTableCell>
                  <StyledTableCell align="center">Số lượng kho</StyledTableCell>
                  <StyledTableCell align="center">Tình trạng</StyledTableCell>
                  <StyledTableCell align="center">Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listProduct.map((product, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {product.nameProduct}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {product.slug}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <img
                          src={product.image}
                          alt=""
                          height="100px"
                          width="100px"
                        ></img>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {product.nameCategory}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {VND.format(product.originPrice)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {VND.format(product.sellPrice)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {product.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {product.disable}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Link to={`/editproduct?idProduct=${product._id}`}>
                          <Button sx={{ margin: "1px" }} variant="contained">
                            Sửa
                          </Button>
                        </Link>
                        <Popconfirm
                          title="Xóa"
                          description="Bạn chắc chắn muốn xóa?"
                          onConfirm={() => handleDeleteProduct(product._id)}
                          onCancel={cancel}
                          okText="Có"
                          cancelText="Không"
                        >
                          <Button sx={{ margin: "1px" }} variant="contained">
                            Xóa
                          </Button>
                        </Popconfirm>
                        <Link to={`/addtech?idProduct=${product._id}`}>
                          <Button sx={{ margin: "1px" }} variant="contained">
                            Thêm thông số
                          </Button>
                        </Link>
                        <Button sx={{ margin: "1px" }} variant="contained">
                          Xem chi tiết
                        </Button>
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
