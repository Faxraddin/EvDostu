import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoot;
