import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
  return (
    <div>
      <h2 className="pay-title">
        TRÂN TRỌNG CẢM ƠN QUÝ KHÁCH ĐÃ ĐỒNG HÀNH VỚI CHÚNG TÔI
      </h2>
      <Result
        style={{ background: "white" }}
        iconFontSize="100"
        title="Thanh toán thành công"
        status="success"
        subTitle="Liên Hệ: 0938551701 nếu có gặp vấn đề !!!"
        extra={[
          <Link to="/follow" key="buy">
            <Button type="primary">Theo dõi đơn hàng</Button>,
          </Link>,
        ]}
      />
    </div>
  );
}
