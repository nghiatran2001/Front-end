import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import { notification } from "antd";

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
import TextArea from "antd/es/input/TextArea";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

import { category as categoryAPI } from "../../API";

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

export default function AddCategory() {
  const [api, contextHolder] = notification.useNotification();

  const [nameCategory, setNameCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      if (nameCategory === "" || description === "") {
        api.open({
          type: "error",
          message: "Vui lòng nhập đủ thông tin.",
        });
      } else {
        const result = await categoryAPI.addCategory({
          nameCategory,
          description,
        });
        if (result.status === 200) {
          api.open({
            type: "success",
            message: "Thêm thành công.",
          });
        }
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Thêm thất bại.",
      });
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
              Thêm sản phẩm
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/categories">
                <Button variant="contained">Danh sách loại sản phẩm</Button>
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
                  <StyledTableCell>Hãng:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      onChange={(e) => setNameCategory(e.target.value)}
                      type="text"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Mô tả:</StyledTableCell>
                  <StyledTableCell>
                    <TextArea
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      sx={{ width: "100%", height: "40px" }}
                    ></TextArea>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained" onClick={handleAddCategory}>
                      Thêm thể loại
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
