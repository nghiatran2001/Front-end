import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import logo from "../../images/dell-vostro-3400.png";
import logo1 from "../../images/msi.png";
import "./Main.css";
import { NavLink } from "react-router-dom";
export default function Main() {
  return (
    <div>
      <Box className="main" sx={{ marginTop: 5 }}>
        <Card className="card" sx={{ width: 300 }}>
          <CardActionArea>
            <img className="img" src={logo} alt="" height="200px" />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Dell Vostro
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text"
              >
                10.000.000 đ
              </Typography>
              <Typography gutterBottom variant="h6" color="red">
                9.000.000 đ
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <NavLink to="/productdetail" className="main-link">
              <Button variant="contained" size="small">
                Xem chi tiết
              </Button>
            </NavLink>
          </CardActions>
        </Card>

        <Card className="card" sx={{ width: 300 }}>
          <CardActionArea>
            <img className="img" src={logo1} alt="" height="200px" />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Dell Vostro
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text"
              >
                10.000.000 đ
              </Typography>
              <Typography gutterBottom variant="h6" color="red">
                9.000.000 đ
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <NavLink to="/productdetail" className="main-link">
              <Button variant="contained" size="small">
                Xem chi tiết
              </Button>
            </NavLink>
          </CardActions>
        </Card>

        <Card className="card" sx={{ width: 300 }}>
          <CardActionArea>
            <img className="img" src={logo} alt="" height="200px" />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Dell Vostro
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text"
              >
                10.000.000 đ
              </Typography>
              <Typography gutterBottom variant="h6" color="red">
                9.000.000 đ
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <NavLink to="/productdetail" className="main-link">
              <Button variant="contained" size="small">
                Xem chi tiết
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}
      >
        <Button variant="outlined">Xem thếm</Button>
      </Box>
    </div>
  );
}
