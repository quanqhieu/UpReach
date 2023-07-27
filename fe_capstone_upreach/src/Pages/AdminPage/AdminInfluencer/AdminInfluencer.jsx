import React from "react";
import "./AdminInfluencer.css";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import HeaderHomePage from "../../../Components/Layouts/Header/HeaderHomepage";
import AdminInfluencerLayout from "./AdminInfluencerLayout/AdminInfluencerLayout";

const AdminInfluencer = () => {
  return (
    <>
      <div className="admin-influencer-page-bg">
        <HeaderHomePage />
        <div className="admin-influencer-page-sidebar">
          <AdminSidebar />
        </div>
        <div className="admin-influencer-page-content">
          <AdminInfluencerLayout />
        </div>
      </div>
    </>
  );
};
export default AdminInfluencer;
