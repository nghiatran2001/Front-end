import React from "react";
import "./Footer.css";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <footer className="footer_width">
        <div className="footer_content">
          <div style={{ padding: 5 }} className="footer_intro">
            <h4>GIỚI THIỆU VỀ CHÚNG TÔI</h4>
            <h4>CHÍNH SÁCH BẢO MẬT</h4>
            <h4>KIỂM TRA HÓA ĐƠN ĐIỆN TỬ</h4>
          </div>
          <div style={{ padding: 5 }} className="footer_hiring">
            <h4>TIN TUYỂN DỤNG</h4>
            <h4>TIN KHUYẾN MÃI</h4>
            <h4>CHÍNH SÁCH TRẢ GÓP</h4>
          </div>
          <div style={{ padding: 5 }} className="footer_support">
            <h4>TƯ VẤN MUA HÀNG</h4>
            <h4>HỖ TRỢ KỸ THUẬT</h4>
            <h4>GÓP Ý, KHIẾU NẠI</h4>
          </div>
          <div style={{ padding: 5 }} className="footer_contact">
            <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <Facebook></Facebook>
            <Instagram></Instagram>
          </div>
        </div>
      </footer>
      <div className="footer">
        <div>
          © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 -
          263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở
          KHĐT TP.HCM cấp ngày 08/03/2012.
        </div>
      </div>
    </>
  );
};

export default Footer;
