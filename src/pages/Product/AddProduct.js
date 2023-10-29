import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import { notification } from "antd";

import {
  Box,
  Button,
  InputBase,
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

import {
  product as productAPI,
  category as categoryAPI,
  brand as brandAPI,
} from "../../API";

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

export default function AddProduct() {
  const [api, contextHolder] = notification.useNotification();

  const [listCategory, setListCategory] = useState([]);
  const [listBrand, setListBrand] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [nameBrand, setNameBrand] = useState("");
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
      if (
        nameProduct === "" ||
        nameCategory === "" ||
        nameBrand === "" ||
        originPrice === "" ||
        sellPrice === "" ||
        quantity === "" ||
        description === "" ||
        image === ""
      ) {
        api.open({
          type: "error",
          message: "Vui lòng nhập đủ thông tin.",
        });
      } else {
        const result = await productAPI.addProduct({
          nameCategory,
          nameProduct,
          nameBrand,
          originPrice,
          sellPrice,
          image,
          quantity,
          description,
        });
        if (result.status === 200) {
          api.open({
            type: "success",
            message: "Thêm sản phẩm thành công.",
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

  useEffect(() => {
    (async () => {
      await getBrandList();
    })();
  }, []);
  const getBrandList = async () => {
    try {
      const result = await brandAPI.getBrandList();
      setListBrand(result.data);
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
              Thêm sản phẩm
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/product">
                <Button variant="contained">Danh sách sản phẩm</Button>
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
                  <StyledTableCell>Tên sản phẩm:</StyledTableCell>
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
                  <StyledTableCell>Thể loại:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      style={{ width: "100%", height: "40px" }}
                      onChange={(e) => setNameCategory(e.target.value)}
                    >
                      <option>Chọn loại</option>
                      {listCategory?.map((category, index) => {
                        return (
                          <option key={index}>{category.nameCategory}</option>
                        );
                      })}
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Hãng:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      style={{ width: "100%", height: "40px" }}
                      onChange={(e) => setNameBrand(e.target.value)}
                    >
                      <option>Chọn hãng</option>
                      {listBrand?.map((brand, index) => {
                        return <option key={index}>{brand.nameBrand}</option>;
                      })}
                    </select>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Giá gốc:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      onChange={(e) => setOriginPrice(e.target.value)}
                      type="number"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Giá bán:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      onChange={(e) => setSellPrice(e.target.value)}
                      type="number"
                      sx={{ width: "100%", height: "40px" }}
                    ></OutlinedInput>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Số lượng:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      slotProps={{
                        input: {
                          min: 0,
                          max: 100,
                          step: 1,
                        },
                      }}
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
                  <StyledTableCell>Hình ảnh:</StyledTableCell>
                  <StyledTableCell>
                    <InputBase
                      onChange={handlePicture}
                      type="file"
                      sx={{ width: "100%", height: "40px" }}
                    ></InputBase>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>

              <TableBody>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained" onClick={handleAddProduct}>
                      Thêm sản phẩm
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
