import React from "react";
import "./Admin.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Admin() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
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
          <Box
            sx={{
              fontSize: 30,
              textAlign: "center",
              paddingTop: 3,
            }}
          >
            <StarBorder></StarBorder>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Dashboard
            </Link>
          </Box>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Quản lý người dùng" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/user" className="admin-link">
                    Danh sách người dùng
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Quản lý sản phẩm" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/product" className="admin-link">
                    Thêm sản phẩm
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/product" className="admin-link">
                    Danh sách sản phẩm
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Quản lý loại sản phẩm" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/categories" className="admin-link">
                    Thêm loại sản phẩm
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/categories" className="admin-link">
                    Danh sách loại sản phẩm
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Quản lý đơn hàng" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/orderadmin" className="admin-link">
                    Danh sách đơn hàng
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Quản lý thống kê" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/user" className="admin-link">
                    Thống kê
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
        <Box></Box>
      </Box>
    </div>
  );
}
