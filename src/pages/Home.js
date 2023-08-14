import React from "react";
import Banner from "../conponent/Banner/Banner";
import Sidebar from "../conponent/Sidebar/Sidebar";
import Main from "../conponent/Main/Main";
import { Col, Row } from "antd";

export default function Home() {
  return (
    // <div
    //   style={{
    //     background: "gray",
    //     width: "90%",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    //   <Banner />
    //   <Sidebar />
    //   <Main />

    // </div>
    <div>
      <Row>
        <Col span={20} offset={2}>
          <Banner />
        </Col>
      </Row>
      <Row style={{ marginTop: "50px", height: "100%" }}>
        <Col span={6} offset={2}>
          <Sidebar />
        </Col>
        <Col span={14}>
          <Main />
        </Col>
      </Row>
    </div>
  );
}
