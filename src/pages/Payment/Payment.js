import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div>
      <h2>Cảm ơn bạn đã mua hàng</h2>
      <h3>Mã đơn hàng của bạn là @ma</h3>
      <Result
        style={{ background: "white" }}
        iconFontSize="80"
        status="success"
        title="Thanh toán thành công"
        subTitle="Gọi số: 0123456789 nếu bạn gặp vấn đề gì!!!."
        extra={[
          <Link to="/follow" key="buy">
            <Button type="primary">Theo dõi đơn hàng</Button>,
          </Link>,
        ]}
      />
    </div>
  );
}
