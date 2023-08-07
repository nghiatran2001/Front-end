import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import logo from "../../images/dell-vostro-3400.png";
import "./Main.css";
import { NavLink } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
export default function Main() {
  return (
    <div className="main">
      <Card className="card" sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text">
              10.000.000 đ
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="red">
              9.000.000 đ
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to="/productdetail" className="main-link">
            <Button variant="contained" size="small">
              Xem chi tiết
            </Button>
          </NavLink>
          <NavLink>
            <Button
              variant="contained"
              size="small"
              startIcon={<ShoppingCart />}
            >
              Thêm giỏ hàng
            </Button>
          </NavLink>
        </CardActions>
      </Card>

      <Card className="card" sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text">
              13.000.000 đ
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="red">
              10.000.000 đ
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to="/product" className="main-link">
            <Button variant="contained" size="small">
              Xem chi tiết
            </Button>
          </NavLink>
          <NavLink>
            <Button
              variant="contained"
              size="small"
              startIcon={<ShoppingCart />}
            >
              Thêm giỏ hàng
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
}
