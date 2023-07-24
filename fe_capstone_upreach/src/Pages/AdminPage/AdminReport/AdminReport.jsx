import React from "react";
import "./AdminReport.css";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import HeaderHomePage from "../../../Components/Layouts/Header/HeaderHomepage";
import AdminReportLayout from "./AdminReportLayout/AdminReportLayout";

const AdminReport = () => {
  return (
    <>
      <div className="report-management-page-bg">
        <HeaderHomePage />
        <div className="report-management-page-sidebar">
          <AdminSidebar />
        </div>
        <div className="report-management-page-content">
          <AdminReportLayout />
        </div>
      </div>
    </>
  );
};
export default AdminReport;
