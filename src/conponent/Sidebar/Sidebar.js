import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
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
      <Box sx={{ width: "100%", bgcolor: "background.paper", marginBottom: 5 }}>
        <Tabs
          value={value1}
          onChange={handleChange1}
          centered
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab label="8GB" />
          <Tab label="2x8GB" />
          <Tab label="16GB" />
          <Tab label="2x16GB" />
        </Tabs>
      </Box>
    </div>
  );
}
