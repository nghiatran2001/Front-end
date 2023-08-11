import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import Admin from "../Admin/Admin";

export default function AddProduct() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 250,
            bgcolor: "#999999",
            height: "100vh",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box sx={{ marginTop: 5, marginLeft: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              Thêm sản phẩm
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 5 }}>
              <Link to="/product">
                <Button variant="contained">Danh sách sản phẩm</Button>
              </Link>
            </Typography>
          </Box>
          <Box>
            <FormControl sx={{ border: 2, padding: 3, borderRadius: 5 }}>
              <FormLabel sx={{ color: "black" }}>
                Tên sản phẩm: <Input sx={{ width: 400 }}></Input>
              </FormLabel>
              <FormLabel sx={{ color: "black" }}>
                Hình ảnh: <InputBase type="password"></InputBase>
              </FormLabel>
              <FormLabel sx={{ color: "black" }}>
                Số lượng: <InputBase type="number" defaultValue={1}></InputBase>
              </FormLabel>
              <FormLabel sx={{ color: "black" }}>
                Giá bán: <Input></Input>
              </FormLabel>
              <FormLabel sx={{ color: "black" }}>
                Giá khuyến mãi: <Input></Input>
              </FormLabel>
              <FormLabel sx={{ color: "black" }}>
                Mô tả: <Input></Input>
              </FormLabel>
              <FormLabel>
                <Button variant="contained">Thêm</Button>
              </FormLabel>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
