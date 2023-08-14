import { Col, Pagination, Row } from "antd";
import React from "react";
import Sidebar from "../../conponent/Sidebar/Sidebar";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../images/dell-vostro-3400.png";
import logo1 from "../../images/acer.png";

export default function Type() {
  const onChange = () => {};
  return (
    <div>
      <Row style={{ marginTop: "50px" }}>
        <Col span={4} offset={2}>
          <Sidebar />
        </Col>
        <Col span={16}>
          <Box className="main">
            <Card className="card" sx={{ width: 200 }}>
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

            <Card className="card" sx={{ width: 200 }}>
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

            <Card className="card" sx={{ width: 200 }}>
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

            <Card className="card" sx={{ width: 200 }}>
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

            <Card className="card" sx={{ width: 200 }}>
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

            <Card className="card" sx={{ width: 200 }}>
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
        </Col>
      </Row>
      <Pagination
        style={{ margin: 40, textAlign: "center" }}
        showQuickJumper
        defaultCurrent={2}
        total={100}
        onChange={onChange}
      />
    </div>
  );
}
