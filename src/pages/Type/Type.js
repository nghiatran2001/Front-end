import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Type.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import { product as productAPI, category as categoryAPI } from "../../API";

export default function Type() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const [listProduct, setListProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);

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
            }}
          >
            All
          </Tab>
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
      <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Col span={20} offset={2}>
          <Box className="main">
            {listProduct.map((product, index) => {
              return product.disable ? (
                ""
              ) : (
                <Card key={index} className="card">
                  <img className="img" src={product.image} alt="" />
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {product.nameProduct}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="text"
                      >
                        {VND.format(product.originPrice)}
                      </Typography>
                      <Typography gutterBottom variant="h6" color="red">
                        {VND.format(product.sellPrice)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <NavLink
                      to={`/productdetail?idProduct=${product._id}`}
                      className="main-link"
                    >
                      <Button variant="contained" size="small">
                        Xem chi tiết
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Col>
      </Row>
    </div>
  );
}
