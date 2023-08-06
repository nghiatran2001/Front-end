import React from "react";
import "./Product.css";
import logo from "../../images/dell-vostro-3400.png";
import { Button, CardContent, Input, Stack, Typography } from "@mui/material";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCart";

import Box from "@mui/material/Box";
export default function Product() {
  const inputRef = React.useRef(null);
  return (
    <div>
      <div className="product">
        <div className="product-left">
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
              <Typography gutterBottom variant="h6" component="div">
                MÀN HÌNH:
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                CHIP:
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                RAM:
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                SSD:
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                CARD ĐỒ HỌA:
              </Typography>
            </Box>
          </div>
        </div>
        <div className="product-right">
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Dell Vostro
            </Typography>
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
                <Typography gutterBottom variant="h6" component="div">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is th
                </Typography>
              </Box>
            </div>
          </CardContent>
          <Box sx={{ marginLeft: 5 }}>
            <Typography gutterBottom variant="h6" component="div">
              Số lượng kho: 10
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              className="text"
            >
              10.000.000 đ
            </Typography>
            <Typography gutterBottom variant="h4" component="div" color="red">
              9.000.000 đ
            </Typography>

            <Stack spacing={1.5} sx={{ maxWidth: 100, marginBottom: 5 }}>
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
        </div>
      </div>
    </div>
  );
}
