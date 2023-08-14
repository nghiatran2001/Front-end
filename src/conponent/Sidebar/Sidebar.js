import React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import { Checkbox } from "antd";

export default function Sidebar() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <p>{option}</p>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "price":
        return options.map((option) => {
          return (
            <p
              style={{
                padding: 3,
                width: "fit-content",
                background: "#c3c3c3",
                borderRadius: "10px",
              }}
            >
              {option}
            </p>
          );
        });
      default:
        return {};
    }
  };
  return (
    <div
      style={{
        background: "gray",
        maxWidth: 240,
        padding: "10px",
        marginTop: "50px",
        borderRadius: 20,
      }}
    >
      {/* <Box
        sx={{
          width: "100%",
          marginTop: 5,
          bgcolor: "background.paper",
          marginBottom: 5,
        }}
      >
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
      </Box> */}

      <h2>Danh mục sản phẩm</h2>
      {renderContent("text", ["Dell", "Asus", "HP"])}
      {renderContent("checkbox", [
        { value: "a", label: "A" },
        { value: "b", label: "B" },
      ])}
      {renderContent("price", [
        "dưới 10.000.000",
        "10.000.000-15.000.000",
        "trên 15.000.000",
      ])}
    </div>
  );
}
