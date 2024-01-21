import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Type.css";
import { Col, Row } from "antd";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import DoubleRight from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import DoubleLeft from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import { Link, NavLink } from "react-router-dom";

import { product as productAPI, category as categoryAPI } from "../../API";

export default function Type() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const [listProduct, setListProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const productPerPage = 8;
  // const lastIndex = currentPage * productPerPage;
  // const firstIndex = lastIndex - productPerPage;
  // const products = listProduct.slice(firstIndex, lastIndex);
  // const pageNumber = Math.ceil(listProduct.length / productPerPage);
  // const numbers = [...Array(pageNumber + 1).keys()].slice(1);

  useEffect(() => {
    (async () => {
      await getProductList();
    })();
  }, []);
  const getProductList = async () => {
    try {
      const result = await productAPI.getProductList();
      setListProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getCategorytList();
    })();
  }, []);
  const getCategorytList = async () => {
    try {
      const result = await categoryAPI.getCategoryList();
      setListCategory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const prePage = async () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const nextPage = async () => {
  //   if (currentPage !== pageNumber) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const changePage = async (id) => {
  //   setCurrentPage(id);
  // };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          marginBottom: 2,
          marginTop: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="red"
          indicatorColor="secondary"
        >
          <Tab
            sx={{
              marginRight: 5,
              marginTop: 5,
              border: 1,
              borderRadius: 5,
            }}
            label="Tất cả"
          ></Tab>
          {listCategory.map((category, index) => {
            return (
              <Tab
                sx={{
                  border: 1,
                  borderRadius: 5,
                  marginRight: 5,
                  marginTop: 5,
                }}
                key={index}
                label={category.nameCategory}
              />
            );
          })}
        </Tabs>
      </Box>
      <Row
        style={{ marginTop: "50px", marginBottom: "50px", minHeight: "60vh" }}
      >
        <Col span={20} offset={2}>
          <Box className="type">
            {listProduct.map((product, index) => {
              if (value === 0) {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
              if (value === 1 && product.nameCategory === "LAPTOP") {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
              if (value === 2 && product.nameCategory === "SSD") {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
              if (value === 3 && product.nameCategory === "RAM") {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
              if (value === 4 && product.nameCategory === "BÀN PHÍM") {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
              if (value === 5 && product.nameCategory === "HDD") {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
              if (value === 6 && product.nameCategory === "CHUỘT MÁY TÍNH") {
                return product.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/productdetail?idProduct=${product._id}`}
                    className="type-link"
                  >
                    <Card key={index} className="card" sx={{ width: 200 }}>
                      <CardActionArea>
                        <img className="img" src={product.image} alt="" />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className="text1"
                            sx={{ height: 120 }}
                          >
                            {product.nameProduct}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text"
                          >
                            {VND.format(product.originPrice)}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            color="red"
                            className="text2"
                          >
                            {VND.format(product.sellPrice)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                );
              }
            })}
          </Box>
        </Col>
      </Row>
      {/* <nav>
        <ul className="pagination">
          <li className="page-item ">
            <Link href="#" className="page-link" onClick={prePage}>
              <DoubleLeft></DoubleLeft>
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${
                currentPage === n ? "page-item red active" : ""
              }`}
              key={i}
            >
              <Link
                href="#"
                className="page-link"
                onClick={() => changePage(n)}
              >
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link href="#" className="page-link" onClick={nextPage}>
              <DoubleRight></DoubleRight>
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
