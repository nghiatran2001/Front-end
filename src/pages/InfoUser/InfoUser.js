import React, { useState } from "react";
import "./InfoUser.css";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import { updateUserSuccess } from "../../redux/userSlice";
import { user as userAPI } from "../../API";
import {
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    background: "white",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function InfoUser() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user, dispatch, updateUserSuccess);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleEditUser = async () => {
    try {
      const result = await userAPI.editUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {};

  const handleCancel1 = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  return (
    <div>
      <div className="infoUser">
        <Form style={{ padding: 20, fontSize: 30 }}>
          <h3>THÔNG TIN NGƯỜI DÙNG</h3>
          <TableContainer
            sx={{
              minWidth: 600,
              border: 1,
              borderRadius: 5,
            }}
            aria-label="customized table"
          >
            <Table>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Họ tên:</StyledTableCell>
                  <StyledTableCell>{user.name}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Email:</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Số điện thoại:</StyledTableCell>
                  <StyledTableCell>{user.phone}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="button">
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={showModal1}>
                Cập nhật
              </Button>
            </Form.Item>
            <Modal
              title="Thay đổi thông tin"
              open={isModalOpen1}
              onOk={handleOk1(user._id)}
              onCancel={handleCancel1}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Input>
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    placeholder="Email"
                    disabled
                    value={user?.email}
                  ></Input>
                </Form.Item>
                <Form.Item
                  label="Số điện thoại"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                >
                  <Input placeholder="Số điện thoại"></Input>
                </Form.Item>
              </Form>
            </Modal>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={showModal}>
                Đổi Mật Khẩu
              </Button>
            </Form.Item>
            <Modal
              title="Thay đổi mật khẩu"
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
                <Form.Item label="Mật khẩu hiện tại">
                  <Input placeholder="Mật khẩu hiện tại" />
                </Form.Item>
                <Form.Item label="Mật khẩu mới">
                  <Input placeholder="Mật khẩu mới" />
                </Form.Item>
                <Form.Item label="Xác nhận mật khẩu mới">
                  <Input placeholder="Xác nhận mật khẩu mới" />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Form>
      </div>
    </div>
  );
}
