import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";

import {
  Box,
  Button,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { notification } from "antd";

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

export default function EditUser() {
  const [api, contextHolder] = notification.useNotification();
  const keyValue = window.location.search;
  const urlParams = new URLSearchParams(keyValue);
  const idUser = urlParams.get("idUser");

  const [user, setUser] = useState([]);

  const handleEditUser = async () => {
    try {
      if (user.name === "" || user.phone === "") {
        api.open({
          type: "error",
          message: "Vui lòng nhập đủ thông tin.",
        });
      } else {
        const result = await userAPI.editUser(user);
        api.open({
          type: "success",
          message: "Sửa người dùng thành công.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getIdUser();
    })();
  }, []);
  const getIdUser = async () => {
    try {
      const result = await userAPI.getIdUser({ id: idUser });
      setUser(result.data);
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
            height: "100vh",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Sửa người dùng
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/user">
                <Button variant="contained">Danh sách người dùng</Button>
              </Link>
            </Typography>
          </Box>

          <TableContainer
            sx={{
              minWidth: 800,
              border: 1,
              borderRadius: 5,
            }}
            aria-label="customized table"
          >
            <Table>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Họ tên:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      value={user.name || ""}
                      onChange={(e) =>
                        setUser((pre) => ({
                          ...pre,
                          name: e.target.value,
                        }))
                      }
                      type="text"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Số điện thoại:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      value={user.phone || ""}
                      onChange={(e) =>
                        setUser((pre) => ({
                          ...pre,
                          phone: e.target.value,
                        }))
                      }
                      type="text"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <Button
                      onClick={() => handleEditUser()}
                      variant="contained"
                    >
                      Cập nhật
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
