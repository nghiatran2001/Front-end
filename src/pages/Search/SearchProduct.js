import React, { useEffect, useState } from "react";
import "./Search.css";
import { useViewPort } from "../../conponent/Hook";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "antd";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { product as productAPI } from "../../API";

export default function SearchProduct(props) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [windowWidth] = useViewPort();
  const [searchParams] = useSearchParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const keywords = searchParams.get("keywords");

  useEffect(() => {
    if (keywords) {
      (async () => {
        await getProductList();
      })();
    }
  }, [keywords]);

  const getProductList = async () => {
    try {
      const result = await productAPI.getProductList();
      setSearchProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {searchProduct && searchProduct?.length > 0 ? (
        ""
      ) : (
        <div className="notFound">
          <Typography>Không tìm thấy</Typography>
        </div>
      )}
    </div>
  );
}
