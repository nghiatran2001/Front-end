import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "./Main.css";
import { NavLink } from "react-router-dom";

import { product as productAPI } from "../../API";

export default function Main() {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [listProduct, setListProduct] = useState([]);

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
      <Typography className="title">Sản phẩm mới</Typography>
      <Box className="main">
        {listProduct?.map((product, index) => {
          return product.disable === "Ngừng hoạt động" ? (
            ""
          ) : (
            <NavLink
              to={`/productdetail?idProduct=${product._id}`}
              className="main-link"
            >
              <Card key={index} className="card" sx={{ width: 200 }}>
                <CardActionArea>
                  <img className="img" src={product.image} alt="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ height: 120 }}>
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
              </Card>
            </NavLink>
          );
        })}
      </Box>
      <Typography className="title">Sản phẩm ngừng bán</Typography>
      <Box className="main">
        {listProduct?.map((product, index) => {
          return product.disable === "Hoạt động" ? (
            ""
          ) : (
            <NavLink
              to={`/productdetail?idProduct=${product._id}`}
              className="main-link"
            >
              <Card key={index} className="card" sx={{ width: 200 }}>
                <CardActionArea>
                  <img className="img" src={product.image} alt="" />
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
              </Card>
            </NavLink>
          );
        })}
      </Box>
    </div>
  );
}
