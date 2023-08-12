import "./InfluUpdateProfileModal.css";
import InfluUpdateSideBar from "./InfluUpdateSideBar/InfluUpdateSideBar";
import InfluUpdateImage from "./InfluUpdateImage/InfluUpdateImage";
import InfluUpdateReport from "./InfluUpdateReport/InfluUpdateReport";
import React from "react";
import axios from "axios";
import { Button, Spin } from "antd";

import { useUserStore } from "../../Stores/user";

const InfluUpdateProfileModal = ({
  setForce,
  oldVerInflu,
  setWaitedDate,
  setIsAllowEdit,
  isChange,
  setIsChange,
  previewInflu,
  mokPreviewInflu,
  setPreviewInflu,
  previewBooking,
  setPreviewBooking,
  idJobsRemove,
  setIdJobsRemove,
  previewChart,
  setPreviewChart,
}) => {
  console.log(previewInflu);
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
        setForce((prev) => prev + 1);
        localStorage.setItem("editDate", new Date());
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật thông tin:", error);
      });
  };
  return (
    <>
      <div className="influ-update-profile">
        <div className="influ-update-side-bar">
          <InfluUpdateSideBar
            influInfo={previewInflu}
            oldVerInflu={oldVerInflu}
          />
        </div>
        <div className="cover-influ-update-image-report">
          <Spin tip="Saving" size="large" spinning={isSaving}>
            <div className="influ-update-image">
              <InfluUpdateImage
                setIsChange={setIsChange}
                influInfo={previewInflu}
                setInfluInfo={setPreviewInflu}
                mokPreviewInflu={mokPreviewInflu}
              />
            </div>
            <div className="influ-update-report">
              <InfluUpdateReport
                mokPreviewInflu={mokPreviewInflu}
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
              <Button
                disabled={!isChange}
                type="primary"
                size={18}
                className="influ-update-report-btn"
                onClick={handleSave}
              >
                SAVE
              </Button>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default InfluUpdateProfileModal;
