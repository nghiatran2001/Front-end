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
import { deleteUser, getAllUser } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../createInstance";
import axios from "axios";

import { user as userAPI } from "../../API";
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

export default function User() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.getAllUser);
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [getId, setGetId] = useState("");
  let handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleEditUser = async () => {
    try {
      const result = await userAPI.editUserAll({ getId, name });
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (id) => {
    setIsModalOpen(true);
    setGetId(id);
  };
  const handleOk = () => {
    handleEditUser();
    window.location.reload(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  const handleDelete = async (id) => {
    try {
      const result = await userAPI.deleteUser({
        id,
      });
      if (result.status === 200) {
        await getAllUser(user?.accessToken, dispatch, axiosJWT);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user?.accessToken) {
      getAllUser(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

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
                        <Button
                          sx={{ margin: 1 }}
                          variant="contained"
                          onClick={(e) => showModal(user._id)}
                        >
                          Sửa
                        </Button>
                        <Modal
                          title="Thay đổi thông tin"
                          open={isModalOpen}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          <Form
                            labelCol={{
                              span: 8,
                            }}
                            wrapperCol={{
                              span: 8,
                            }}
                            style={{
                              minWidth: 600,
                            }}
                          >
                            <Form.Item label="Họ tên">
                              <Input
                                placeholder="Họ tên"
                                value={user.name}
                                onChange={(e) => handleSetName(e)}
                              ></Input>
                            </Form.Item>

                            <Form.Item label="Số điện thoại">
                              <Input
                                placeholder="Số điện thoại"
                                value={user.phone}
                                onChange={(e) => {
                                  setUserId((pre) => ({
                                    ...pre,
                                    phone: e.target.value,
                                  }));
                                }}
                              ></Input>
                            </Form.Item>
                          </Form>
                        </Modal>
                        <Button
                          onClick={() => {
                            handleDelete(user._id);
                          }}
                          sx={{ margin: 1 }}
                          variant="contained"
                        >
                          Xóa
                        </Button>
                        <Button sx={{ margin: 1 }} variant="contained">
                          Khóa
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
