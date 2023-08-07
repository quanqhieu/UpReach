import "./AdminApproveProfile.css";
import InfluSideBar from "./InfluSideBar/ApproveInfluSideBar";
import InfluImage from "./InfluImage/ApproveInfluImage";
import InfluReport from "./InfluReport/ApproveInfluReport";
import React from "react";
import axios from "axios";
const AdminApproveProfile = ({ approveReport }) => {
  console.log();
  const handleApprove = () => {
    axios
      .post("http://localhost:4000/api/admin/approve-report", {
        userId: approveReport.user.User_ID,
        kolsId: approveReport.user.KOLs_ID,
        isPublish: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật thông tin:", error);
      });
  };
  return (
    <>
      <div className="admin-approve-profile">
        <div className="influ-side-bar">
          <InfluSideBar influInfo={approveReport} />
        </div>
        <div className="cover-influ-image-report">
          <div className="influ-image">
            <InfluImage influInfo={approveReport} />
          </div>
          <div className="influ-report">
            <InfluReport influInfo={approveReport} />
          </div>
        </div>
        <button className="admin-approve-report-btn" onClick={handleApprove}>
          Approve
        </button>
      </div>
    </>
  );
};

export default AdminApproveProfile;
