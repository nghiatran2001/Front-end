import React from "react";
import Banner from "../conponent/Banner/Banner";
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
      <Row style={{ marginTop: "50px" }}>
        <Col span={20} offset={2}>
          <Main />
        </Col>
      </Row>
    </div>
  );
}
