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
import TextArea from "antd/es/input/TextArea";

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

export default function UpdateCategory() {
  const [api, contextHolder] = notification.useNotification();
  const keyValue = window.location.search;
  const urlParams = new URLSearchParams(keyValue);
  const idCategory = urlParams.get("idCategory");

  const [categoryList, setCategoryList] = useState([]);

  const handleUpdateCategory = async () => {
    try {
      if (categoryList.nameCategory === "") {
        api.open({
          type: "error",
          message: "Vui lòng nhập đủ thông tin.",
        });
      } else {
        const result = await categoryAPI.updateCategory(categoryList);
        api.open({
          type: "success",
          message: "Sửa thành công.",
        });
      }
    } catch (error) {
      api.open({
        type: "error",
        message: "Tên loại đã tồn tại.",
      });
    }
  };

  useEffect(() => {
    (async () => {
      await getIdCategory();
    })();
  }, []);
  const getIdCategory = async () => {
    try {
      const result = await categoryAPI.getIdCategory({ id: idCategory });
      setCategoryList(result.data);
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
              Sửa loại
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/categories">
                <Button variant="contained">Danh sách loại</Button>
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
                  <StyledTableCell>Tên hãng:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      value={categoryList.nameCategory || ""}
                      onChange={(e) =>
                        setCategoryList((pre) => ({
                          ...pre,
                          nameCategory: e.target.value,
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
                  <StyledTableCell>Mô tả:</StyledTableCell>
                  <StyledTableCell>
                    <TextArea
                      value={categoryList.description || ""}
                      onChange={(e) =>
                        setCategoryList((pre) => ({
                          ...pre,
                          description: e.target.value,
                        }))
                      }
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
                    <Button
                      onClick={() => handleUpdateCategory()}
                      variant="contained"
                    >
                      Sửa
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
