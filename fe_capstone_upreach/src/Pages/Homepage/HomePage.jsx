import FooterHome from "../../Components/Layouts/Footer/FooterHome";
import HeaderLoginHompape from "../../Components/Layouts/Header/HeaderLoginHompape";
import Index_HomePage from "./Index_Homepage.jsx";
import React from "react";

const HomePage = () => {
  return (
    <div className="coverMain">
      <HeaderLoginHompape />
      <Index_HomePage />
      <FooterHome />
    </div>
  );
};
export default HomePage;
