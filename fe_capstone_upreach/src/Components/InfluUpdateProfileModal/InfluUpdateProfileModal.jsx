import "./InfluUpdateProfileModal.css";
import InfluUpdateSideBar from "./InfluUpdateSideBar/InfluUpdateSideBar";
import InfluUpdateImage from "./InfluUpdateImage/InfluUpdateImage";
import InfluUpdateReport from "./InfluUpdateReport/InfluUpdateReport";
import React from "react";
import axios from "axios";
import { Spin } from "antd";

import { useUserStore } from "../../Stores/user";

const InfluUpdateProfileModal = ({
  setWaitedDate,
  setIsAllowEdit,
  setIsChange,
  previewInflu,
  setPreviewInflu,
  previewBooking,
  setPreviewBooking,
  idJobsRemove,
  setIdJobsRemove,
  previewChart,
  setPreviewChart,
}) => {
  const [user, setUserInfo] = useUserStore((state) => [
    state.user,
    state.setUserInfo,
  ]);
  const [isSaving, setIsSaving] = React.useState(false);
  const handleSave = () => {
    setIsSaving(true);
    var dateUTC = new Date();
    dateUTC.setHours(dateUTC.getHours() + 7);
    var dateVN7 = JSON.stringify(dateUTC);

    const formData = new FormData();
    formData.append("influ", JSON.stringify(previewInflu));
    formData.append("chart", JSON.stringify(previewChart));
    formData.append("booking", JSON.stringify(previewBooking));
    formData.append("idRemove", JSON.stringify(idJobsRemove));
    formData.append("editDate", dateVN7);

    axios
      .put("http://localhost:4000/api/influ/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setWaitedDate(0);
        setIsAllowEdit(false);
        setIsChange(false);
        setIsSaving(false);
        localStorage.setItem("editDate", new Date());
        // setUserInfo(previewInflu);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật thông tin:", error);
      });
  };
  return (
    <>
      <div className="influ-update-profile">
        <div className="influ-update-side-bar">
          <InfluUpdateSideBar influInfo={previewInflu} />
        </div>
        <div className="cover-influ-update-image-report">
          <Spin tip="Saving" size="large" spinning={isSaving}>
            <div className="influ-update-image">
              <InfluUpdateImage
                setIsChange={setIsChange}
                influInfo={previewInflu}
                setInfluInfo={setPreviewInflu}
              />
            </div>
            <div className="influ-update-report">
              <InfluUpdateReport
                setIsChange={setIsChange}
                influInfo={previewInflu}
                setInfluInfo={setPreviewInflu}
                bookingInfo={previewBooking}
                setBookingInfo={setPreviewBooking}
                idJobsRemove={idJobsRemove}
                setIdJobsRemove={setIdJobsRemove}
                chartInfo={previewChart}
                setChartInfo={setPreviewChart}
              />
              <button className="influ-update-report-btn" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default InfluUpdateProfileModal;
