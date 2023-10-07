import React, { useEffect, useState } from "react";
import "./InfoUser.css";
import { Button, Form, Input, Modal } from "antd";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

  const [userId, setUserId] = useState("");

  const handleEditUser = async () => {
    try {
      const result = await userAPI.editUser(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleEditUser();
    window.location.reload(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  useEffect(() => {
    (async () => {
      await getIdUser();
    })();
  }, []);

  const getIdUser = async () => {
    try {
      const result = await userAPI.getIdUser({ id: user._id });
      setUserId(result.data);
    } catch (error) {
      console.log(error);
    }
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
                  <StyledTableCell>{userId.name}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Email:</StyledTableCell>
                  <StyledTableCell>{userId.email}</StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell>Số điện thoại:</StyledTableCell>
                  <StyledTableCell>{userId.phone}</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="button">
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={showModal}>
                Cập nhật
              </Button>
            </Form.Item>
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
                    value={userId.name}
                    onChange={(e) => {
                      setUserId((pre) => ({ ...pre, name: e.target.value }));
                    }}
                  ></Input>
                </Form.Item>

                <Form.Item label="Số điện thoại">
                  <Input
                    placeholder="Số điện thoại"
                    value={userId.phone}
                    onChange={(e) => {
                      setUserId((pre) => ({ ...pre, phone: e.target.value }));
                    }}
                  ></Input>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Form>
      </div>
    </div>
  );
}
