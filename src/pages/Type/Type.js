import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import Sidebar from "../../conponent/Sidebar/Sidebar";
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
import logo from "../../images/dell-vostro-3400.png";

import { product as productAPI } from "../../API";

export default function Type() {
  const onChange = () => {};

  const [listProduct, setListProduct] = useState([]);
  console.log(listProduct);
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
      <Sidebar />
      <Row style={{ marginTop: "100px", marginBottom: "300px" }}>
        <Col span={20} offset={2}>
          <Box className="main">
            {listProduct.map((product, index) => {
              return (
                <Card key={index} className="card" sx={{ width: 200 }}>
                  <CardActionArea>
                    <img
                      className="img"
                      src={product.image}
                      alt=""
                      height="200px"
                    />
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
