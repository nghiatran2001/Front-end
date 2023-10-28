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
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

import { product as productAPI, category as categoryAPI } from "../../API";

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

export default function AddTech() {
  const [api, contextHolder] = notification.useNotification();

  const [listCategory, setListCategory] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [originPrice, setOriginPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handlePicture = (e) => {
    let reader = new FileReader();
    console.log(e);
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const result = await productAPI.addProduct({
        nameCategory,
        nameProduct,
        originPrice,
        sellPrice,
        image,
        quantity,
        description,
      });
      if (result.status === 200) {
        api.success({
          message: `thanh cong`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getCategoryList();
    })();
  }, []);
  const getCategoryList = async () => {
    try {
      const result = await categoryAPI.getCategoryList();
      setListCategory(result.data);
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
              Thêm thông số kỹ thuật
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/techdetail">
                <Button variant="contained">Xem chi tiết</Button>
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
                  <StyledTableCell>CHIP xử lý:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      onChange={(e) => setNameProduct(e.target.value)}
                      type="text"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Dung lượng RAM:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      style={{ width: "100%", height: "40px" }}
                      onChange={(e) => setNameCategory(e.target.value)}
                    >
                      <option>Chọn RAM</option>
                      <option>8 GB</option>
                      <option>2 x 8 GB</option>
                      <option>16 GB</option>
                      <option>2 x 16 GB</option>
                      <option>32 GB</option>
                      <option>2 x 32 GB</option>
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Ổ cứng:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      style={{ width: "100%", height: "40px" }}
                      onChange={(e) => setNameCategory(e.target.value)}
                    >
                      <option>Chọn ổ cứng</option>
                      <option>128 GB</option>
                      <option>256 GB</option>
                      <option>512 GB</option>
                      <option>1 TB</option>
                      <option>2 TB</option>
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Màn hình (inchs):</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      onChange={(e) => setNameProduct(e.target.value)}
                      type="number"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Hệ điều hành:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      style={{ width: "100%", height: "40px" }}
                      onChange={(e) => setNameCategory(e.target.value)}
                    >
                      <option>Chọn hệ điều hành</option>
                      <option>MacOS</option>
                      <option>Window</option>
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained" onClick={handleAddProduct}>
                      Thêm
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
