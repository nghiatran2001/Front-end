import Slider from "react-slick";
import styled from "styled-components";

const BannerStyle = styled(Slider)`
  & .slick-arrow.slick-prev {
    left: 12px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #ffffff;
    }
  }
  & .slick-arrow.slick-next {
    right: 28px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #ffffff;
    }
  }
  & .slick-dots {
    z-index: 10;
    bottom: -2px !important;
    li {
      button {
        &::before {
          color: rgb(255, 255, 0.5);
        }
      }
    }
    li.active {
      button {
        &::before {
          color: #ffffff;
        }
      }
    }
  }
`;
export default BannerStyle;
