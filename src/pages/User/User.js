import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
                {userList?.map((user, index) => {
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
                          <Button sx={{ margin: 1 }} variant="contained">
                            Sửa
                          </Button>
                        </Link>
                        <Popconfirm
                          title="Xóa"
                          description="Bạn chắc chắn muốn xóa?"
                          onConfirm={() => {
                            handleDelete(user._id);
                          }}
                          onCancel={cancel}
                          okText="Có"
                          cancelText="Không"
                        >
                          <Button sx={{ margin: 1 }} variant="contained">
                            Xóa
                          </Button>
                        </Popconfirm>
                        {user?.disable ? (
                          <Button
                            onClick={() => {
                              handleOpen(user._id);
                            }}
                            sx={{ margin: 1 }}
                            variant="contained"
                          >
                            Mở khóa
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              handleBlock(user._id);
                            }}
                            sx={{ margin: 1 }}
                            variant="contained"
                          >
                            Khóa
                          </Button>
                        )}
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
