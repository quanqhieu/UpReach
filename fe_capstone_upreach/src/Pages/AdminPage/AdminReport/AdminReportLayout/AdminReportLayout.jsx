import React from "react";
import "./AdminReportLayout.css";
import AdminApproveCard from "../../../../Components/AdminApproveCard/AdminApproveCard";
import { List, Modal } from "antd";
import { VERSION_PROFILE_INFLU } from "../../../HomePage/ConstHomePage";

const AdminReportLayout = () => {
  const [versionProfile, setVersionProfile] = React.useState(
    VERSION_PROFILE_INFLU
  );

  return (
    <>
      <div className="report-management-layout">
        <div className="report-management-approve">
          Wait to approve
          <div className="report-management-approve-items">
            {versionProfile?.map((item, index) => (
              <div className="report-management-approve-item" key={index}>
                <AdminApproveCard bookingList={item} />
              </div>
            ))}
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
export default AdminReportLayout;
