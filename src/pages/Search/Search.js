import React, { useEffect, useState } from "react";
import "./Search.css";
import { useViewPort } from "../../conponent/Hook";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Col, Row } from "antd";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { product as productAPI } from "../../API";

function Search(props) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const [windowWidth] = useViewPort();
  const [searchParams] = useSearchParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const keywords = searchParams.get("keywords");
  const navigate = useNavigate();
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

  const handleDetailProduct = (e) => {
    navigate(`/productdetail?idProduct=${e._id}`);
  };
  return (
    // <div className="searchPane">
    //   {searchProduct && searchProduct?.length > 0 ? (
    //     <>
    //       <div
    //         className="searchContent"
    //         style={{
    //           gridTemplateColumns: `repeat(${
    //             windowWidth > 1200
    //               ? 5
    //               : windowWidth > 922
    //               ? 4
    //               : windowWidth > 768
    //               ? 3
    //               : windowWidth > 600
    //               ? 2
    //               : 1
    //           },auto)`,
    //         }}
    //       >
    //         {searchProduct?.map((item, index) => {
    //           if (
    //             item?.nameProduct?.includes(keywords) ||
    //             item?.nameProduct?.toLowerCase()?.includes(keywords)
    //           ) {
    //             return item?.disable === "Ngừng hoạt động" ? (
    //               ""
    //             ) : (
    //               <div
    //                 className="movieItem"
    //                 key={index}
    //                 onClick={() => handleDetailProduct(item)}
    //               >
    //                 <img className="img_search" src={item?.image} alt="" />
    //                 <p className="name_search">{item?.nameProduct}</p>
    //                 <p className="price_search">
    //                   {VND.format(item?.originPrice)}
    //                 </p>
    //                 <p className="price_search">
    //                   {VND.format(item?.sellPrice)}
    //                 </p>
    //               </div>
    //             );
    //           } else if (
    //             item?.nameCategory?.includes(keywords) ||
    //             item?.nameCategory?.toLowerCase()?.includes(keywords)
    //           ) {
    //             return item?.disable === "Ngừng hoạt động" ? (
    //               ""
    //             ) : (
    //               <div
    //                 className="movieItem"
    //                 key={index}
    //                 onClick={() => handleDetailProduct(item)}
    //               >
    //                 <img className="img_search" src={item?.image} alt="" />
    //                 <p className="name_search">{item?.nameProduct}</p>
    //                 <p className="price_search">
    //                   {VND.format(item?.sellPrice)}
    //                 </p>
    //               </div>
    //             );
    //           } else if (
    //             item?.nameBrand?.includes(keywords) ||
    //             item?.nameBrand?.toLowerCase()?.includes(keywords)
    //           ) {
    //             return item?.disable === "Ngừng hoạt động" ? (
    //               ""
    //             ) : (
    //               <div
    //                 className="movieItem"
    //                 key={index}
    //                 onClick={() => handleDetailProduct(item)}
    //               >
    //                 <img className="img_search" src={item?.image} alt="" />
    //                 <p className="name_search">{item?.nameProduct}</p>
    //                 <p className="price_search">
    //                   {VND.format(item?.sellPrice)}
    //                 </p>
    //               </div>
    //             );
    //           }
    //         })}
    //       </div>
    //     </>
    //   ) : (
    //     <div className="notFound">
    //       <h1 style={{ color: "black" }}>Không tìm thấy sẩn phẩm</h1>
    //     </div>
    //   )}
    // </div>
    <div>
      {searchProduct && searchProduct?.length > 0 ? (
        <>
          {" "}
          <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Col span={20} offset={2}>
              <Box className="type">
                {searchProduct?.map((item, index) => {
                  if (
                    item?.nameProduct?.includes(keywords) ||
                    item?.nameProduct?.toLowerCase()?.includes(keywords) ||
                    item?.nameProduct?.toUpperCase()?.includes(keywords)
                  ) {
                    return item?.disable === "Ngừng hoạt động" ? (
                      ""
                    ) : (
                      <Card
                        key={index}
                        onClick={() => handleDetailProduct(item)}
                        className="card"
                        sx={{ width: 200 }}
                      >
                        <CardActionArea>
                          <img className="img" src={item.image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className="text1"
                            >
                              {item.nameProduct}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text"
                            >
                              {VND.format(item.originPrice)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              color="red"
                              className="text2"
                            >
                              {VND.format(item.sellPrice)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  } else if (
                    item?.nameCategory?.includes(keywords) ||
                    item?.nameCategory?.toLowerCase()?.includes(keywords) ||
                    item?.nameCategory?.toUpperCase()?.includes(keywords)
                  ) {
                    return item?.disable === "Ngừng hoạt động" ? (
                      ""
                    ) : (
                      <Card
                        key={index}
                        onClick={() => handleDetailProduct(item)}
                        className="card"
                        sx={{ width: 200 }}
                      >
                        <CardActionArea>
                          <img className="img" src={item.image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className="text1"
                            >
                              {item.nameProduct}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text"
                            >
                              {VND.format(item.originPrice)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              color="red"
                              className="text2"
                            >
                              {VND.format(item.sellPrice)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  } else if (
                    item?.nameBrand?.includes(keywords) ||
                    item?.nameBrand?.toLowerCase()?.includes(keywords) ||
                    item?.nameBrand?.toUpperCase()?.includes(keywords)
                  ) {
                    return item?.disable === "Ngừng hoạt động" ? (
                      ""
                    ) : (
                      <Card
                        key={index}
                        onClick={() => handleDetailProduct(item)}
                        className="card"
                        sx={{ width: 200 }}
                      >
                        <CardActionArea>
                          <img className="img" src={item.image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              className="text1"
                            >
                              {item.nameProduct}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text"
                            >
                              {VND.format(item.originPrice)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              color="red"
                              className="text2"
                            >
                              {VND.format(item.sellPrice)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  }
                })}
              </Box>
            </Col>
          </Row>
        </>
      ) : (
        <div className="notFound">
          <h1 style={{ color: "black" }}>Không tìm thấy sẩn phẩm</h1>
        </div>
      )}
    </div>
  );
}

export default Search;
