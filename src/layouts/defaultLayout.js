import Header from "../conponent/Header/Header";
import Footer from "../conponent/Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ flex: "1", margin: "150px 0" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
