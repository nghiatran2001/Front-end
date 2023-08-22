import logo1 from "../../images/banner-1.jpg";
import logo2 from "../../images/banner-2.jpg";
import logo3 from "../../images/banner-3.jpg";
import logo4 from "../../images/banner-4.png";
import React from "react";
import { Image } from "antd";
import BannerStyle from "./style";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const arrImg = [logo1, logo2, logo3, logo4];
  return (
    <>
      <div
        style={{
          borderRadius: 20,
        }}
      >
        <BannerStyle {...settings}>
          {arrImg.map((image) => {
            return (
              <Image
                src={image}
                alt="banner"
                preview={false}
                width="100%"
                height="350px"
              />
            );
          })}
        </BannerStyle>
      </div>
    </>
  );
}
