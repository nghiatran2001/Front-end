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
import { Modal } from "antd";
import DoubleRight from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import DoubleLeft from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
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
  const [idOrder, setIdOrder] = React.useState();
  const [order, setOrder] = useState([]);
  const [idProduct, setIdProduct] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 5;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const orders = order.slice(firstIndex, lastIndex);
  const pageNumber = Math.ceil(order.length / productPerPage);
  const numbers = [...Array(pageNumber + 1).keys()].slice(1);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e) => {
    setIsModalOpen(true);
    setIdOrder(e);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  useEffect(() => {
    if (idOrder) {
      (async () => {
        await getIdOrder();
      })();
    }
  }, [idOrder]);
  const getIdOrder = async () => {
    try {
      const result = await paymentAPI.getIdOrder({ id: idOrder });
      setIdProduct(result.data);
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
                  <StyledTableCell>Tổng tiền</StyledTableCell>
                  <StyledTableCell>Trạng thái</StyledTableCell>
                  <StyledTableCell>Chi tiết sản phẩm</StyledTableCell>
                  <StyledTableCell>Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((o, i) => {
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {o._id}
                      </StyledTableCell>
                      <StyledTableCell>{o.name}</StyledTableCell>
                      <StyledTableCell>{o.email}</StyledTableCell>
                      <StyledTableCell>0{o.phone}</StyledTableCell>
                      <StyledTableCell>{o.address}</StyledTableCell>
                      <StyledTableCell>{VND.format(o.total)}</StyledTableCell>
                      <StyledTableCell>{o.status}</StyledTableCell>
                      <StyledTableCell align="center">
                        <See
                          className="orderadm-delete"
                          onClick={(e) => showModal(o._id)}
                        ></See>
                        <Modal
                          width="70%"
                          title="Thông tin sản phẩm"
                          open={isModalOpen}
                          onCancel={handleCancel}
                          onOk={handleOk}
                        >
                          <TableContainer className="orderadmin-bg">
                            <Table
                              sx={{
                                maxWidth: "100%",
                              }}
                              aria-label="spanning table"
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell>
                                    <h3>Tên sản phẩm</h3>
                                  </TableCell>
                                  <TableCell>
                                    <h3>Hình ảnh</h3>
                                  </TableCell>
                                  <TableCell align="center">
                                    <h3>Số lượng</h3>
                                  </TableCell>
                                  <TableCell align="center">
                                    <h3>Đơn giá</h3>
                                  </TableCell>
                                  <TableCell align="right">
                                    <h3>Thành tiền</h3>
                                  </TableCell>
                                  <TableCell align="right"></TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {idProduct?.order?.map((o) => {
                                  if (o.disable === false) {
                                    return (
                                      <TableRow>
                                        <TableCell>{o.nameProduct}</TableCell>
                                        <TableCell>
                                          <img
                                            className="image-cart"
                                            src={o.image}
                                            alt=""
                                            align="center"
                                          ></img>
                                        </TableCell>
                                        <TableCell
                                          align="center"
                                          className="btn"
                                        >
                                          <span className="btn-quantity">
                                            {o.quantity}
                                          </span>
                                        </TableCell>
                                        <TableCell align="center">
                                          {VND.format(o.sellPrice)}
                                        </TableCell>
                                        <TableCell align="right">
                                          {VND.format(o.quantity * o.sellPrice)}
                                        </TableCell>
                                      </TableRow>
                                    );
                                  }
                                })}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Modal>
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
          <nav>
            <ul className="pagination">
              <li className="page-item ">
                <Link href="#" className="page-link" onClick={prePage}>
                  <DoubleLeft></DoubleLeft>
                </Link>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${
                    currentPage === n ? "page-item red active" : ""
                  }`}
                  key={i}
                >
                  <Link
                    href="#"
                    className="page-link"
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </Link>
                </li>
              ))}
              <li className="page-item">
                <Link href="#" className="page-link" onClick={nextPage}>
                  <DoubleRight></DoubleRight>
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    </div>
  );
}
