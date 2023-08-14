import React from "react";
import imgProduct from "../../images/dell-vostro-3400.png";
import imgProductSmall from "../../images/hp.jpg";
import { Button, CardContent, Input, Stack, Typography } from "@mui/material";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import "./ProductDetail.css";
import { Col, Row } from "antd";
export default function ProductDetail() {
  const inputRef = React.useRef(null);
  return (
    <div>
      <Row>
        <Col span={20} offset={2}>
          <Row>
            <Col span={20}>
              <h3>Trang chủ</h3>
            </Col>
          </Row>
          <Row style={{ padding: 20, background: "white" }}>
            <Col span={10} offset={1}>
              <div className="product_detail">
                <img
                  className="img_product"
                  src={imgProduct}
                  alt="img-product"
                ></img>
              </div>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Col style={{ flexBasis: "unset" }} span={6}>
                  <img
                    className="img_small"
                    src={imgProduct}
                    alt="img-product-small"
                  />
                </Col>
                <Col style={{ flexBasis: "unset" }} span={6}>
                  <img
                    className="img_small"
                    src={imgProductSmall}
                    alt="img-product-small"
                  />
                </Col>
                <Col style={{ flexBasis: "unset" }} span={6}>
                  <img
                    className="img_small"
                    src={imgProductSmall}
                    alt="img-product-small"
                  />
                </Col>
                <Col style={{ flexBasis: "unset" }} span={6}>
                  <img
                    className="img_small"
                    src={imgProductSmall}
                    alt="img-product-small"
                  />
                </Col>
              </Row>
              <Box
                sx={{
                  backgroundColor: "#c3c3c3",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Typography gutterBottom variant="h4">
                  Thông số kỹ thuật
                </Typography>
                <Typography gutterBottom>MÀN HÌNH:</Typography>
                <Typography gutterBottom>CHIP:</Typography>
                <Typography gutterBottom>RAM:</Typography>
                <Typography gutterBottom>SSD:</Typography>
                <Typography gutterBottom>CARD ĐỒ HỌA:</Typography>
              </Box>
            </Col>
            <Col span={11} offset={1}>
              <CardContent>
                <Typography gutterBottom variant="h3">
                  Dell Vostro
                </Typography>
                <Box sx={{ marginLeft: 5 }}>
                  <Typography gutterBottom sx={{ fontSize: 15 }}>
                    Số lượng kho: 10
                  </Typography>
                  <Typography
                    gutterBottom
                    color="text.secondary"
                    className="text"
                    sx={{ fontSize: 17 }}
                  >
                    Giá gốc: <span>10.000.000 đ</span>
                  </Typography>
                  <Typography gutterBottom color="red" sx={{ fontSize: 20 }}>
                    Giá khuyến mãi: <span>8.000.000 đ</span>
                  </Typography>
                  <Stack spacing={1.5} sx={{ maxWidth: 50, marginBottom: 5 }}>
                    <Input
                      type="number"
                      defaultValue={1}
                      slotProps={{
                        input: {
                          ref: inputRef,
                          min: 1,
                          max: 5,
                          step: 1,
                        },
                      }}
                    />
                  </Stack>
                  <Box sx={{ marginBottom: 5 }}>
                    <Button variant="outlined" size="small">
                      -
                    </Button>
                    <span style={{ margin: 20 }}>1</span>
                    <Button variant="outlined" size="small">
                      +
                    </Button>
                  </Box>
                  <Button
                    sx={{ fontSize: 15 }}
                    variant="contained"
                    startIcon={<ShoppingCartRounded />}
                  >
                    Thêm giỏ hàng
                  </Button>
                </Box>
              </CardContent>
              <Box
                sx={{
                  backgroundColor: "#c3c3c3",
                  borderRadius: "10px",
                  padding: 2,
                }}
              >
                <Typography gutterBottom variant="h4">
                  Mô tả sản phẩm
                </Typography>
                <Typography gutterBottom>
                  The point of using Lorem Ipsum. It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum.
                </Typography>
              </Box>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
