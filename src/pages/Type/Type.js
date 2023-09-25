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

import { product as productAPI } from "../../API";

export default function Type() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  //phan trang
  const onChange = () => {};

  const [listProduct, setListProduct] = useState([]);

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

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
          textColor="primary"
          indicatorColor="secondary"
        >
          {listProduct.map((product, index) => {
            return <Tab key={index} label={product.nameCategory} />;
          })}
        </Tabs>
      </Box>
      <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
        <Col span={20} offset={2}>
          <Box className="main">
            {listProduct.map((product, index) => {
              return (
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
                    <NavLink to="/productdetail" className="main-link">
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
      <Pagination
        style={{ margin: 40, textAlign: "center" }}
        showQuickJumper
        defaultCurrent={2}
        total={100}
        onChange={onChange}
      />
    </div>
  );
}
