import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Admin from "../Admin/Admin";
import "./Product.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Popconfirm, notification } from "antd";

import { product as productAPI } from "../../API";

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

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const products = listProduct.slice(firstIndex, lastIndex);
  const pageNumber = Math.ceil(listProduct.length / productPerPage);
  const numbers = [...Array(pageNumber + 1).keys()].slice(1);

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

  const prePage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = async () => {
    if (currentPage !== pageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = async (id) => {
    setCurrentPage(id);
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
                  <StyledTableCell align="center">Tên sản phẩm</StyledTableCell>
                  <StyledTableCell align="center">Hình ảnh</StyledTableCell>
                  <StyledTableCell align="center">Hãng</StyledTableCell>
                  <StyledTableCell align="center">Thể loại</StyledTableCell>
                  <StyledTableCell align="center">Giá gốc</StyledTableCell>
                  <StyledTableCell align="center">Giá bán</StyledTableCell>
                  <StyledTableCell align="center">Số lượng kho</StyledTableCell>
                  <StyledTableCell align="center">Tình trạng</StyledTableCell>
                  <StyledTableCell align="center">Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {product.nameProduct}
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
                        {product.nameBrand}
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
                        <Link to={`/techdetail?idProduct=${product._id}`}>
                          <Button sx={{ margin: "1px" }} variant="contained">
                            Chi tiết
                          </Button>
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  Truoc
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Sau
                </a>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    </div>
  );
}
