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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./User.css";
import Update from "@mui/icons-material/ConstructionOutlined";
import Delete from "@mui/icons-material/DeleteForeverOutlined";
import Key from "@mui/icons-material/KeyOutlined";
import Block from "@mui/icons-material/LockOutlined";
import DoubleRight from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import DoubleLeft from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import { Popconfirm, notification } from "antd";

import { user as userAPI } from "../../API";
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

export default function User() {
  const [api, contextHolder] = notification.useNotification();
  const user = useSelector((state) => state.auth.login?.currentUser);

  const [userList, setUserList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 3;
  const lastIndex = currentPage * userPerPage;
  const firstIndex = lastIndex - userPerPage;
  const users = userList.slice(firstIndex, lastIndex);
  const pageNumber = Math.ceil(userList.length / userPerPage);
  const numbers = [...Array(pageNumber + 1).keys()].slice(1);

  const handleDelete = async (id) => {
    try {
      const result = await userAPI.deleteUser({
        id,
      });
      if (result.status === 200) {
        await getUserList();
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

  const handleBlock = async (id) => {
    try {
      const result = await userAPI.blockUser({
        id,
      });
      if (result.status === 200) {
        await getUserList();
        api.open({
          type: "success",
          message: "Khóa tài khoản thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Khóa tài khoản thất bại.",
      });
      console.log(error);
    }
  };

  const handleOpen = async (id) => {
    try {
      const result = await userAPI.openUser({
        id,
      });
      if (result.status === 200) {
        await getUserList();
        api.open({
          type: "success",
          message: "Mở tài khoản thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Mở tài khoản thất bại.",
      });
      console.log(error);
    }
  };

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
          <Typography variant="h5" sx={{ marginBottom: 5 }}>
            Danh sách người dùng
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">STT</StyledTableCell>
                  <StyledTableCell align="center">Họ Tên</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">
                    Số Điện Thoại
                  </StyledTableCell>
                  <StyledTableCell align="center">Phân Quyền</StyledTableCell>
                  <StyledTableCell align="center">Thao tác</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((user, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="center">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user?.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user?.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user?.phone}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user?.role ? `Admin` : `User`}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Link to={`/edituser?idUser=${user._id}`}>
                          <Update className="user-delete"></Update>
                        </Link>
                        {user?.role ? (
                          ""
                        ) : (
                          <Popconfirm
                            onConfirm={() => {
                              handleDelete(user._id);
                            }}
                            title="Xóa"
                            description="Bạn chắc chắn muốn xóa?"
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                          >
                            <Delete className="user-delete"></Delete>
                          </Popconfirm>
                        )}
                        {user?.disable ? (
                          <Popconfirm
                            onConfirm={() => {
                              handleOpen(user._id);
                            }}
                            title="Khóa"
                            description="Bạn chắc chắn muốn khóa?"
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                          >
                            <Block className="user-delete"></Block>
                          </Popconfirm>
                        ) : (
                          <Popconfirm
                            onConfirm={() => {
                              handleBlock(user._id);
                            }}
                            title="Mở Khóa"
                            description="Bạn chắc chắn muốn mở khóa?"
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                          >
                            <Key className="user-delete"></Key>
                          </Popconfirm>
                        )}
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
