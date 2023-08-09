import React from "react";
import logo from "../../images/dell-vostro-3400.png";
import { Button, CardContent, Input, Stack, Typography } from "@mui/material";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import "./ProductDetail.css";
export default function ProductDetail() {
  const inputRef = React.useRef(null);
  return (
    <div>
      <div className="productdetail">
        <div className="productdetail-left">
          <img src={logo} alt=""></img>
          <div>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: 3,
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                Thông số kỹ thuật
              </Typography>
              <Typography gutterBottom component="div">
                MÀN HÌNH:
              </Typography>
              <Typography gutterBottom component="div">
                CHIP:
              </Typography>
              <Typography gutterBottom component="div">
                RAM:
              </Typography>
              <Typography gutterBottom component="div">
                SSD:
              </Typography>
              <Typography gutterBottom component="div">
                CARD ĐỒ HỌA:
              </Typography>
            </Box>
          </div>
        </div>
        <div className="productdetail-right">
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Dell Vostro
            </Typography>

            <Box sx={{ marginLeft: 5 }}>
              <Typography gutterBottom component="div" sx={{ fontSize: 15 }}>
                Số lượng kho: <span>10</span>
              </Typography>
              <Typography
                gutterBottom
                color="text.secondary"
                className="text"
                sx={{ fontSize: 17 }}
              >
                Giá gốc: <span>10.000.000 đ</span>
              </Typography>
              <Typography
                gutterBottom
                component="div"
                color="red"
                sx={{ fontSize: 20 }}
              >
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

              <Button
                sx={{ fontSize: 15 }}
                variant="contained"
                startIcon={<ShoppingCartRounded />}
              >
                Thêm giỏ hàng
              </Button>
            </Box>
          </CardContent>
          <div>
            <Box
              sx={{
                width: "100%",
                height: 400,
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: 3,
                marginRight: 3,
                marginBottom: 3,
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                Mô tả sản phẩm <span></span>
              </Typography>
              <Typography gutterBottom component="div">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is th
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
