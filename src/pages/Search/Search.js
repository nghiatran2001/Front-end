import React, { useEffect, useState } from "react";
import "./Search.css";
import { useViewPort } from "../../conponent/Hook";
import { useNavigate, useSearchParams } from "react-router-dom";
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
    <div className="searchPane">
      {searchProduct && searchProduct.length > 0 ? (
        <>
          <div
            className="searchContent"
            style={{
              gridTemplateColumns: `repeat(${
                windowWidth > 1200
                  ? 5
                  : windowWidth > 922
                  ? 4
                  : windowWidth > 768
                  ? 3
                  : windowWidth > 600
                  ? 2
                  : 1
              },auto)`,
            }}
          >
            {searchProduct.map((item, index) => {
              if (
                item.nameProduct.includes(keywords) ||
                item.nameProduct.toLowerCase().includes(keywords)
              ) {
                return item.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <div
                    className="movieItem"
                    key={index}
                    onClick={() => handleDetailProduct(item)}
                  >
                    <img className="img_search" src={item.image} alt="" />
                    <p className="name_search">{item.nameProduct}</p>
                    <p className="price_search">{VND.format(item.sellPrice)}</p>
                  </div>
                );
              } else if (
                item.nameCategory.includes(keywords) ||
                item.nameCategory.toLowerCase().includes(keywords)
              ) {
                return item.disable === "Ngừng hoạt động" ? (
                  ""
                ) : (
                  <div
                    className="movieItem"
                    key={index}
                    onClick={() => handleDetailProduct(item)}
                  >
                    <img className="img_search" src={item.image} alt="" />
                    <p className="name_search">{item.nameProduct}</p>
                    <p className="price_search">{VND.format(item.sellPrice)}</p>
                  </div>
                );
              }
            })}
          </div>
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
