import React from "react";
import "./AdminReportLayout.css";
import { List, Modal } from "antd";
import {
  VERSION_PROFILE_INFLU,
  PROFILE_INFLUS,
} from "../../../HomePage/ConstHomePage";
import AdminApproveCard from "../../../../Components/AdminApproveCard/AdminApproveCard";
import ProfileCardComponent from "../../../../Components/Layouts/ProfileCardComponent/ProfileCardComponent";
import InfluProfile from "../../../../Components/InfluProfileModal/InfluProfile";
import axios from "axios";

const AdminReportLayout = () => {
  const [influInfo, setInfluInfo] = React.useState("");
  const [isOpenProfileInflu, setIsOpenProfileInflu] = React.useState(false);
  const [profileInflus, setProfileInflus] = React.useState(PROFILE_INFLUS);

  const [versionProfile, setVersionProfile] = React.useState(
    VERSION_PROFILE_INFLU
  );

  const handleOpenModal = (info) => {
    setInfluInfo(info);
    setIsOpenProfileInflu(true);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/get-aprrove-report", {
        params: {
          // email: user.influencerEmail,
        },
      })

      .then((response) => {
        const info = response.data.data;

        // console.log(info);
      })
      .catch((error) => {
        console.error("Error while fetching profile information:", error);
      });
  }, []);

  return (
    <>
      <Modal
        className="custom-modal"
        centered
        open={isOpenProfileInflu}
        footer={null}
        onCancel={() => setIsOpenProfileInflu(false)}
        width={1400}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluProfile profileInflu={influInfo} />
      </Modal>
      <div className="report-management-layout">
        <div className="report-management-wait">
          Wait to approve
          <div className="report-management-wait-items">
            {versionProfile?.map((item, index) => (
              <div className="report-management-wait-item" key={index}>
                <AdminApproveCard bookingList={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="report-management-admin-view">
          <div className="admin-view-title">All Influencer</div>
          <List
            grid={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },

              pageSize: 9,
              position: "bottom",
              align: "center",
            }}
            dataSource={profileInflus}
            renderItem={(item) => (
              <List.Item
                style={{ display: "flex", flexDirection: "column" }}
                onClick={() => handleOpenModal(item)}
              >
                <ProfileCardComponent profileInflu={item} />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default AdminReportLayout;
