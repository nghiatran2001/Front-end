import logo1 from "../../images/banner-1.jpg";
import logo2 from "../../images/banner-2.jpg";
import logo3 from "../../images/banner-3.jpg";
import logo4 from "../../images/banner-4.png";
import Slider from "react-slick";
import React from "react";
import { Image } from "antd";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const arrImg = [logo1, logo2, logo3, logo4];
  return (
    <>
      <div
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          borderRadius: 20,
        }}
      >
        <Slider {...settings}>
          {arrImg.map((image) => {
            return (
              <Image
                src={image}
                alt="banner"
                preview={false}
                width="100%"
                height="400px"
              />
            );
          })}
        </Slider>
        {/* <Box
          sx={{
            fontSize: 30,
            marginTop: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CaretLeftOutlined />
          <CaretRightOutlined />
        </Box> */}
      </div>
    </>
  );
}
