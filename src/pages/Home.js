import React from "react";
import Header from "../conponent/Header/Header";
import Banner from "../conponent/Banner/Banner";
import Footer from "../conponent/Footer/Footer";
import Sidebar from "../conponent/Sidebar/Sidebar";
import Main from "../conponent/Main/Main";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}
