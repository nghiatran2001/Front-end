import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div>
      <h1>Order</h1>
      <Button>
        <Link to="/payment">thanh toán</Link>
      </Button>
    </div>
  );
}
