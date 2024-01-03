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
            background: "#87ceeb",
            height: "1000px",
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <Box
            sx={{
              fontSize: 30,
              textAlign: "center",
            }}
          >
            <Box sx={{ marginBottom: "50px", marginTop: "50px", fontSize: 35 }}>
              <StarBorder></StarBorder>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                TRANG CHỦ
              </Link>
            </Box>
          </Box>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText
                className="admin-title"
                primary="QUẢN LÝ NGƯỜI DÙNG"
              />
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
              <ListItemText
                className="admin-title"
                primary="QUẢN LÝ SẢN PHẨM"
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
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
              <ListItemText
                className="admin-title"
                primary="QUẢN LÝ THỂ LOẠI"
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/categories" className="admin-link">
                    Danh sách thể loại
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText className="admin-title" primary="QUẢN LÝ HÃNG" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/brand" className="admin-link">
                    Danh sách hãng sản xuất
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleClick}>
              <ListItemText
                className="admin-title"
                primary="QUẢN LÝ ĐƠN HÀNG"
              />
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
              <ListItemText
                className="admin-title"
                primary="QUẢN LÝ THỐNG KÊ"
              />

              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/filter" className="admin-link">
                    Thống kê
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>
    </div>
  );
}
