import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Admin from "../Admin/Admin";
import "./Filter.css";
export default function Filter() {
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
            height: "100%",
          }}
        >
          <Admin></Admin>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ margin: 5 }}>
            Thống kê
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ paddingRight: 10, paddingLeft: 15 }}>
              <Typography sx={{ fontSize: 20 }}>Người dùng</Typography>
              <div>4</div>
            </Box>
            <Box sx={{ paddingRight: 10, paddingLeft: 15 }}>
              <Typography sx={{ fontSize: 20 }}>Đơn đã giao</Typography>
              <div>10 / 20</div>
            </Box>
            <Box sx={{ paddingRight: 10, paddingLeft: 15 }}>
              <Typography sx={{ fontSize: 20 }}>Doanh số đã bán</Typography>
              <div>10</div>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
