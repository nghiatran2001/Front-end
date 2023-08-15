import React from "react";
import imgProduct from "../../images/dell-vostro-3400.png";
import imgProductSmall from "../../images/hp.jpg";
import { Button, CardContent, Typography } from "@mui/material";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import "./ProductDetail.css";
import { Col, InputNumber, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
export default function ProductDetail() {
  const onChange = () => {};

  return (
    <div>
      <Row>
        <Col span={20} offset={2}>
          <Row>
            <Col span={24}>
              <h3>Trang chủ</h3>
            </Col>
          </Row>
          <Row
            style={{ padding: 20, background: "white", borderRadius: "10px" }}
          >
            <Col
              span={11}
              style={{ borderRight: "1px solid #e5e5e5", paddingRight: 20 }}
            >
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
            <Col span={13} style={{ paddingLeft: 20 }}>
              <CardContent sx={{ marginBottom: 5 }}>
                <Typography gutterBottom variant="h3">
                  Dell Vostro
                </Typography>
                <Box>
                  <Box>
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
                  </Box>
                  <Box
                    sx={{
                      marginBottom: 3,
                      marginTop: 5,
                    }}
                  >
                    <Typography
                      gutterBottom
                      sx={{ fontSize: 15, marginBottom: "20px" }}
                    >
                      Số lượng kho: 10
                    </Typography>
                    <div className="quantity">
                      <button
                        style={{ border: "none", background: "transparent" }}
                      >
                        <MinusOutlined style={{ fontSize: "20px" }} />
                      </button>
                      <InputNumber
                        min={1}
                        max={5}
                        defaultValue={1}
                        size="small"
                        onChange={onChange}
                      />
                      <button
                        style={{ border: "none", background: "transparent" }}
                      >
                        <PlusOutlined style={{ fontSize: "20px" }} />
                      </button>
                    </div>
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
