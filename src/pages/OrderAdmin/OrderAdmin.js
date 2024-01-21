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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DropDown from "@mui/icons-material/ArrowDropDownOutlined";

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
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [idOrder, setIdOrder] = React.useState();
  const [order, setOrder] = useState([]);
  const [idProduct, setIdProduct] = useState([]);
  const [sortProduct, setSortProduct] = useState("ASC");

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

  const sorting = (col) => {
    if (sortProduct === "ASC") {
      const sorted = [...order].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setOrder(sorted);
      setSortProduct("DSC");
    }
    if (sortProduct === "DSC") {
      const sorted = [...order].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setOrder(sorted);
      setSortProduct("ASC");
    }
  };

  const sorting2 = (col) => {
    if (sortProduct === "ASC") {
      const sorted = [...order].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setOrder(sorted);
      setSortProduct("DSC");
    }
    if (sortProduct === "DSC") {
      const sorted = [...order].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setOrder(sorted);
      setSortProduct("ASC");
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
            height: "100%",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Typography variant="h5" sx={{ marginBottom: 5 }}>
            Danh sách đơn hàng
          </Typography>
          <Typography>
            <Tabs
              sx={{ marginBottom: 2 }}
              value={value}
              onChange={handleChange}
              centered
            >
              <Tab className="follow-tab" label="Tất cả"></Tab>
              <Tab className="follow-tab" label="Đang xử lý"></Tab>
              <Tab className="follow-tab" label="Đã xác nhận"></Tab>
              <Tab className="follow-tab" label="Đang giao"></Tab>
              <Tab className="follow-tab" label="Đã giao"></Tab>
              <Tab className="follow-tab" label="Đã hủy"></Tab>
            </Tabs>
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: "1200px", borderRadius: 5 }}
          >
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Mã Đơn Hàng</StyledTableCell>
                  <StyledTableCell
                    className="product-down"
                    onClick={() => sorting("name")}
                  >
                    Người Nhận
                    <p>
                      <DropDown></DropDown>
                    </p>
                  </StyledTableCell>
                  <StyledTableCell
                    className="product-down"
                    onClick={() => sorting("email")}
                  >
                    Email
                    <p>
                      <DropDown></DropDown>
                    </p>
                  </StyledTableCell>
                  <StyledTableCell
                    className="product-down"
                    onClick={() => sorting2("phone")}
                  >
                    Điện Thoại
                    <p>
                      <DropDown></DropDown>
                    </p>
                  </StyledTableCell>
                  <StyledTableCell
                    className="product-down"
                    onClick={() => sorting("address")}
                  >
                    Địa Chỉ
                    <p>
                      <DropDown></DropDown>
                    </p>
                  </StyledTableCell>
                  <StyledTableCell
                    className="product-down"
                    onClick={() => sorting2(parseInt("total"))}
                  >
                    Tổng Tiền
                    <p>
                      <DropDown></DropDown>
                    </p>
                  </StyledTableCell>
                  <StyledTableCell
                    className="product-down"
                    onClick={() => sorting("status")}
                  >
                    Trạng thái
                    <p>
                      <DropDown></DropDown>
                    </p>
                  </StyledTableCell>
                  <StyledTableCell>Chi Tiết </StyledTableCell>
                  <StyledTableCell>Thao Tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((o, i) => {
                  if (value === 0) {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell sx={{ maxWidth: "150px" }}>
                          {o.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: "200px" }}>
                          {o.email}
                        </StyledTableCell>
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
                                            {VND.format(
                                              o.quantity * o.sellPrice
                                            )}
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
                          {o.status === "Đã huỷ" || o.status === "Đã giao" ? (
                            ""
                          ) : (
                            <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                              <Update className="orderadm-delete"></Update>
                            </Link>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                  if (value === 1 && o.status === "Đang xử lý") {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell sx={{ maxWidth: "150px" }}>
                          {o.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: "200px" }}>
                          {o.email}
                        </StyledTableCell>
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
                                            {VND.format(
                                              o.quantity * o.sellPrice
                                            )}
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
                          {o.status === "Đã huỷ" || o.status === "Đã giao" ? (
                            ""
                          ) : (
                            <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                              <Update className="orderadm-delete"></Update>
                            </Link>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                  if (value === 2 && o.status === "Đã xác nhận") {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell sx={{ maxWidth: "150px" }}>
                          {o.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: "200px" }}>
                          {o.email}
                        </StyledTableCell>
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
                                            {VND.format(
                                              o.quantity * o.sellPrice
                                            )}
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
                          {o.status === "Đã huỷ" || o.status === "Đã giao" ? (
                            ""
                          ) : (
                            <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                              <Update className="orderadm-delete"></Update>
                            </Link>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                  if (value === 3 && o.status === "Đang giao") {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell sx={{ maxWidth: "150px" }}>
                          {o.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: "200px" }}>
                          {o.email}
                        </StyledTableCell>
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
                                            {VND.format(
                                              o.quantity * o.sellPrice
                                            )}
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
                          {o.status === "Đã huỷ" || o.status === "Đã giao" ? (
                            ""
                          ) : (
                            <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                              <Update className="orderadm-delete"></Update>
                            </Link>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                  if (value === 4 && o.status === "Đã giao") {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell sx={{ maxWidth: "150px" }}>
                          {o.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: "200px" }}>
                          {o.email}
                        </StyledTableCell>
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
                                            {VND.format(
                                              o.quantity * o.sellPrice
                                            )}
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
                          {o.status === "Đã huỷ" || o.status === "Đã giao" ? (
                            ""
                          ) : (
                            <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                              <Update className="orderadm-delete"></Update>
                            </Link>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                  if (value === 5 && o.status === "Đã huỷ") {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell sx={{ maxWidth: "150px" }}>
                          {o.name}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: "200px" }}>
                          {o.email}
                        </StyledTableCell>
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
                                            {VND.format(
                                              o.quantity * o.sellPrice
                                            )}
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
                          {o.status === "Đã huỷ" || o.status === "Đã giao" ? (
                            ""
                          ) : (
                            <Link to={`/updateorderadmin?idOrder=${o._id}`}>
                              <Update className="orderadm-delete"></Update>
                            </Link>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
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
