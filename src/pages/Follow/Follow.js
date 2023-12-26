import React, { useEffect, useState } from "react";
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

import { payment as paymentAPI } from "../../API";
import { Form, Input, Modal } from "antd";

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
export default function Follow() {
  const [value, setValue] = React.useState(0);
  const [idOrder, setIdOrder] = React.useState();
  // const [dxl, setDXL] = React.useState("dANG XU LY");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const [order, setOrder] = useState([]);
  const [idProduct, setIdProduct] = useState([]);

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
  // console.log(idProduct.order);
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
                {order.map((o, i) => {
                  if (
                    value === 0 ||
                    (value === 1 && o.status === "Đang xử lý")
                  ) {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell>{o.name}</StyledTableCell>
                        <StyledTableCell>{o.email}</StyledTableCell>
                        <StyledTableCell>{o.phone}</StyledTableCell>
                        <StyledTableCell>{o.status}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            variant="contained"
                            onClick={(e) => showModal(o._id)}
                          >
                            Xem chi tiếts
                          </Button>
                          <Modal
                            width="100%"
                            title="Thông tin sản phẩm"
                            open={isModalOpen}
                            onCancel={handleCancel}
                          >
                            <TableContainer className="cart-bg">
                              <Table
                                sx={{
                                  maxWidth: "85%",
                                  margin: 10,
                                  borderRadius: 10,
                                  background: "white",
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
                                  {/* {idProduct.order.map((e) => {
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
                                    <TableCell align="center" className="btn">
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
                                  </TableRow>;
                                })} */}
                                </TableBody>
                                <TableBody>
                                  <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell
                                      align="center"
                                      className="btn"
                                    ></TableCell>
                                    <TableCell align="center">
                                      Tổng tiền:
                                    </TableCell>
                                    <TableCell align="right">
                                      {VND.format(1)}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Modal>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Button sx={{ marginRight: 2 }} variant="contained">
                            Huỷ đơn
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  } else if (
                    value === 0 ||
                    (value === 2 && o.status === "Đã xác nhận")
                  ) {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell>{o.name}</StyledTableCell>
                        <StyledTableCell>{o.email}</StyledTableCell>
                        <StyledTableCell>{o.phone}</StyledTableCell>
                        <StyledTableCell>{o.status}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            variant="contained"
                            onClick={(e) => showModal(o._id)}
                          >
                            Xem chi tiếts
                          </Button>
                          <Modal
                            width="100%"
                            title="Thông tin sản phẩm"
                            open={isModalOpen}
                            onCancel={handleCancel}
                          >
                            <TableContainer className="cart-bg">
                              <Table
                                sx={{
                                  maxWidth: "85%",
                                  margin: 10,
                                  borderRadius: 10,
                                  background: "white",
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
                                  {/* {idProduct.order.map((e) => {
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
                                    <TableCell align="center" className="btn">
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
                                  </TableRow>;
                                })} */}
                                </TableBody>
                                <TableBody>
                                  <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell
                                      align="center"
                                      className="btn"
                                    ></TableCell>
                                    <TableCell align="center">
                                      Tổng tiền:
                                    </TableCell>
                                    <TableCell align="right">
                                      {VND.format(1)}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Modal>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Button sx={{ marginRight: 2 }} variant="contained">
                            Huỷ đơn
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  } else if (
                    value === 0 ||
                    (value === 3 && o.status === "Đang giao")
                  ) {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell>{o.name}</StyledTableCell>
                        <StyledTableCell>{o.email}</StyledTableCell>
                        <StyledTableCell>{o.phone}</StyledTableCell>
                        <StyledTableCell>{o.status}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            variant="contained"
                            onClick={(e) => showModal(o._id)}
                          >
                            Xem chi tiếts
                          </Button>
                          <Modal
                            width="100%"
                            title="Thông tin sản phẩm"
                            open={isModalOpen}
                            onCancel={handleCancel}
                          >
                            <TableContainer className="cart-bg">
                              <Table
                                sx={{
                                  maxWidth: "85%",
                                  margin: 10,
                                  borderRadius: 10,
                                  background: "white",
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
                                  {/* {idProduct.order.map((e) => {
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
                                    <TableCell align="center" className="btn">
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
                                  </TableRow>;
                                })} */}
                                </TableBody>
                                <TableBody>
                                  <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell
                                      align="center"
                                      className="btn"
                                    ></TableCell>
                                    <TableCell align="center">
                                      Tổng tiền:
                                    </TableCell>
                                    <TableCell align="right">
                                      {VND.format(1)}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Modal>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  } else if (
                    value === 0 ||
                    (value === 4 && o.status === "Đã giao")
                  ) {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {o._id}
                        </StyledTableCell>
                        <StyledTableCell>{o.name}</StyledTableCell>
                        <StyledTableCell>{o.email}</StyledTableCell>
                        <StyledTableCell>{o.phone}</StyledTableCell>
                        <StyledTableCell>{o.status}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            variant="contained"
                            onClick={(e) => showModal(o._id)}
                          >
                            Xem chi tiếts
                          </Button>
                          <Modal
                            width="100%"
                            title="Thông tin sản phẩm"
                            open={isModalOpen}
                            onCancel={handleCancel}
                          >
                            <TableContainer className="cart-bg">
                              <Table
                                sx={{
                                  maxWidth: "85%",
                                  margin: 10,
                                  borderRadius: 10,
                                  background: "white",
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
                                  {/* {idProduct.order.map((e) => {
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
                                    <TableCell align="center" className="btn">
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
                                  </TableRow>;
                                })} */}
                                </TableBody>
                                <TableBody>
                                  <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell
                                      align="center"
                                      className="btn"
                                    ></TableCell>
                                    <TableCell align="center">
                                      Tổng tiền:
                                    </TableCell>
                                    <TableCell align="right">
                                      {VND.format(1)}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Modal>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
