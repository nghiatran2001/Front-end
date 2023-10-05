import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../Admin/Admin";

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

export default function EditProduct() {
  const keyValue = window.location.search;
  const urlParams = new URLSearchParams(keyValue);
  const idProduct = urlParams.get("idProduct");

  const [product, setProduct] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [nameCategory, setNameCategory] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [originPrice, setOriginPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handlePicture = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  const handleEditProduct = async () => {
    try {
      const result = await productAPI.editProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await getIdProduct();
    })();
  }, []);
  const getIdProduct = async () => {
    try {
      const result = await productAPI.getIdProduct({ id: idProduct });
      setProduct(result.data);
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
      setCategoryList(result.data);
    } catch (error) {
      console.log(error);
    }
  };
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
            height: "100vh",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Sửa sản phẩm
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
                  <StyledTableCell>Sửa sản phẩm:</StyledTableCell>
                  <StyledTableCell>
                    <OutlinedInput
                      value={product.nameProduct || ""}
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          nameProduct: e.target.value,
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
                  <StyledTableCell>Hãng:</StyledTableCell>
                  <StyledTableCell>
                    <select
                      style={{ width: "100%", height: "40px" }}
                      value={product.nameCategory || ""}
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          nameCategory: e.target.value,
                        }))
                      }
                    >
                      {categoryList?.map((category, index) => {
                        return <option>{category.nameCategory}</option>;
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
                      value={product.originPrice || ""}
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          originPrice: e.target.value,
                        }))
                      }
                      type="number"
                      defaultValue={0}
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
                      value={product.sellPrice || ""}
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          sellPrice: e.target.value,
                        }))
                      }
                      type="number"
                      defaultValue={0}
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
                      value={product.quantity || ""}
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          quantity: e.target.value,
                        }))
                      }
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
                    <OutlinedInput
                      value={product.description || ""}
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          description: e.target.value,
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
                  <StyledTableCell>Hình ảnh:</StyledTableCell>
                  <StyledTableCell>
                    <InputBase
                      onChange={(e) =>
                        setProduct((pre) => ({
                          ...pre,
                          image: e.target.value,
                        }))
                      }
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
                    <Button
                      onClick={() => handleEditProduct()}
                      variant="contained"
                    >
                      Sửa sản phẩm
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
