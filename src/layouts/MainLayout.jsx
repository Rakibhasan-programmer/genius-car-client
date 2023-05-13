import React from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <NavigationBar />
      <div style={{minHeight: "50vh"}}>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
