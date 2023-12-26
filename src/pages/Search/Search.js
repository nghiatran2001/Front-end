import React, { useEffect, useState } from "react";
import "./Search.css";
import { useViewPort } from "../../conponent/Hook";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Col, Row } from "antd";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { product as productAPI } from "../../API";

function Search(props) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const [windowWidth] = useViewPort();
  const [searchParams] = useSearchParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const keywords = searchParams.get("keywords");
  const navigate = useNavigate();
  useEffect(() => {
    if (keywords) {
      (async () => {
        await getProductList();
      })();
    }
  }, [keywords]);

  const getProductList = async () => {
    try {
      const result = await productAPI.getProductList();
      setSearchProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailProduct = (e) => {
    navigate(`/productdetail?idProduct=${e._id}`);
  };
  return (
    <div>
      {searchProduct && searchProduct?.length > 0 ? (
        <>
          {" "}
          <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Col span={20} offset={2}>
              <Box className="type">
                {searchProduct?.map((item, index) => {
                  if (
                    item?.nameProduct?.includes(keywords) ||
                    item?.nameProduct?.toLowerCase()?.includes(keywords) ||
                    item?.nameProduct?.toUpperCase()?.includes(keywords)
                  ) {
                    return item?.disable === "Ngừng hoạt động" ? (
                      ""
                    ) : (
                      <Card
                        key={index}
                        onClick={() => handleDetailProduct(item)}
                        className="card"
                        sx={{ width: 200 }}
                      >
                        <CardActionArea>
                          <img className="img" src={item.image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className="text1"
                            >
                              {item.nameProduct}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text"
                            >
                              {VND.format(item.originPrice)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              color="red"
                              className="text2"
                            >
                              {VND.format(item.sellPrice)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  } else if (
                    item?.nameCategory?.includes(keywords) ||
                    item?.nameCategory?.toLowerCase()?.includes(keywords) ||
                    item?.nameCategory?.toUpperCase()?.includes(keywords)
                  ) {
                    return item?.disable === "Ngừng hoạt động" ? (
                      ""
                    ) : (
                      <Card
                        key={index}
                        onClick={() => handleDetailProduct(item)}
                        className="card"
                        sx={{ width: 200 }}
                      >
                        <CardActionArea>
                          <img className="img" src={item.image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className="text1"
                            >
                              {item.nameProduct}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text"
                            >
                              {VND.format(item.originPrice)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              color="red"
                              className="text2"
                            >
                              {VND.format(item.sellPrice)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  } else if (
                    item?.nameBrand?.includes(keywords) ||
                    item?.nameBrand?.toLowerCase()?.includes(keywords) ||
                    item?.nameBrand?.toUpperCase()?.includes(keywords)
                  ) {
                    return item?.disable === "Ngừng hoạt động" ? (
                      ""
                    ) : (
                      <Card
                        key={index}
                        onClick={() => handleDetailProduct(item)}
                        className="card"
                        sx={{ width: 200 }}
                      >
                        <CardActionArea>
                          <img className="img" src={item.image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className="text1"
                            >
                              {item.nameProduct}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text"
                            >
                              {VND.format(item.originPrice)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              color="red"
                              className="text2"
                            >
                              {VND.format(item.sellPrice)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  }
                })}
              </Box>
            </Col>
          </Row>
        </>
      ) : (
        <div className="notFound">
          <Typography>Không tìm thấy</Typography>
        </div>
      )}
    </div>
  );
}

export default Search;
