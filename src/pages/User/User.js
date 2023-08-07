import React from "react";
import { Box } from "@mui/material";
import Admin from "../Admin/Admin";

export default function User() {
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
        <Box>This is user</Box>
      </Box>
    </div>
  );
}
