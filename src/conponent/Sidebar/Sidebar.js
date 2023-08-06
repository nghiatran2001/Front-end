import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper", marginBottom: 5 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab label="Asus" />
          <Tab label="Dell" />
          <Tab label="Apple" />
          <Tab label="HP" />
          <Tab label="MSI" />
          <Tab label="Acer" />
          <Tab label="Lenovo" />
        </Tabs>
      </Box>
    </div>
  );
}
