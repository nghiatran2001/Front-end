import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import "./Main.css";
import { Link, NavLink } from "react-router-dom";
import DoubleRight from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import DoubleLeft from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

import { product as productAPI } from "../../API";

export default function Main() {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [listProduct, setListProduct] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 5;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const products = listProduct.slice(firstIndex, lastIndex);
  const pageNumber = Math.ceil(listProduct.length / productPerPage);
  const numbers = [...Array(pageNumber + 1).keys()].slice(1);

  useEffect(() => {
    (async () => {
      await getProductList();
    })();
  }, []);
  const getProductList = async () => {
    try {
      const result = await productAPI.getProductList();
      setListProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const prePage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = async () => {
    if (currentPage !== pageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = async (id) => {
    setCurrentPage(id);
  };

  return (
    <div>
      <Typography className="title">Sản phẩm đang kinh doanh</Typography>
      <Box className="main">
        {products?.map((product, index) => {
          return product.disable === "Ngừng hoạt động" ? (
            ""
          ) : (
            <NavLink
              to={`/productdetail?idProduct=${product._id}`}
              className="main-link"
            >
              <Card key={index} className="card" sx={{ width: 200 }}>
                <CardActionArea>
                  <img className="img" src={product.image} alt="" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ height: 120 }}>
                      {product.nameProduct}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text"
                    >
                      {VND.format(product.originPrice)}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="red">
                      {VND.format(product.sellPrice)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </NavLink>
          );
        })}
      </Box>
      <nav>
        <ul className="pagination">
          <li className="page-item ">
            <Link href="#" className="page-link" onClick={prePage}>
              <DoubleLeft></DoubleLeft>
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${
                currentPage === n ? "page-item red active" : ""
              }`}
              key={i}
            >
              <Link
                href="#"
                className="page-link"
                onClick={() => changePage(n)}
              >
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link href="#" className="page-link" onClick={nextPage}>
              <DoubleRight></DoubleRight>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
