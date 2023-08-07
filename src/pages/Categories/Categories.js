import { Box } from "@mui/material";
import React from "react";
import Admin from "../Admin/Admin";

export default function Categories() {
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
        <Box>This is Categories</Box>
      </Box>
    </div>
  );
}
