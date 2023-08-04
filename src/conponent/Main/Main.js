import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import logo from "../../images/banner-3.jpg";
import "./Main.css";
import { NavLink } from "react-router-dom";
export default function Main() {
  return (
    <div className="main">
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              with over 6,000 species.
            </Typography>
          </CardContent>
        </CardActionArea>
        <NavLink to="/product" className="main-link">
          <CardActions>
            <Button size="small" color="primary">
              Xem chi tiết
            </Button>
          </CardActions>
        </NavLink>
      </Card>

      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              with over 6,000 species.
            </Typography>
          </CardContent>
        </CardActionArea>
        <NavLink to="/product" className="main-link">
          <CardActions>
            <Button size="small" color="primary">
              Xem chi tiết
            </Button>
          </CardActions>
        </NavLink>
      </Card>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              with over 6,000 species.
            </Typography>
          </CardContent>
        </CardActionArea>
        <NavLink to="/product" className="main-link">
          <CardActions>
            <Button size="small" color="primary">
              Xem chi tiết
            </Button>
          </CardActions>
        </NavLink>
      </Card>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              with over 6,000 species.
            </Typography>
          </CardContent>
        </CardActionArea>
        <NavLink to="/product" className="main-link">
          <CardActions>
            <Button size="small" color="primary">
              Xem chi tiết
            </Button>
          </CardActions>
        </NavLink>
      </Card>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <img src={logo} alt="" height="200px"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dell Vostro
            </Typography>
            <Typography variant="body2" color="text.secondary">
              with over 6,000 species.
            </Typography>
          </CardContent>
        </CardActionArea>
        <NavLink to="/product" className="main-link">
          <CardActions>
            <Button size="small" color="primary">
              Xem chi tiết
            </Button>
          </CardActions>
        </NavLink>
      </Card>
    </div>
  );
}
