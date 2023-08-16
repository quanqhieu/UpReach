import React from "react";
import "./InfluencerReportLayout.css";
import InfluencerProfileCard from "../../../../Components/InfluencerProfileCard/InfluencerProfileCard";
import InfluUpdateProfileModal from "../../../../Components/InfluUpdateProfileModal/InfluUpdateProfileModal";
import InfluVersionModal from "../../../../Components/InfluencerVersionProfileModal/InfluVersionProfile";
import { ReactComponent as IconArrow } from "../../../../Assets/Icon/IconArrow.svg";
import { List, Modal, Dropdown, Space, Progress, Spin } from "antd";
import {
  ExclamationCircleOutlined,
  DownOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Buttons from "../../../../Components/UI/Buttons";
import { useUserStore } from "../../../../Stores/user";
import { useEffect } from "react";
import axios from "axios";

const InfluencerReportLayout = () => {
  const [user] = useUserStore((state) => [state.user]);
  const [previewInflu, setPreviewInflu] = React.useState({});
  const [mokPreviewInflu, setMokPreviewInflu] = React.useState({});
  const [oldVerInflu, setOldVerInflu] = React.useState({});

  const [previewBooking, setPreviewBooking] = React.useState([]);
  const [previewChart, setPreviewChart] = React.useState([]);
  const [idJobsRemove, setIdJobsRemove] = React.useState([]);
  const [profileVersion, setProfileVersion] = React.useState([]);
  const [reportVersion, setReportVersion] = React.useState([]);
  const [force, setForce] = React.useState(0);

  const [isChange, setIsChange] = React.useState(false);
  const [openConfirmForm, setOpenConfirmForm] = React.useState(false);
  const [isOpenProfileInflu, setIsOpenProfileInflu] = React.useState(false);
  const [isOpenVersionInflu, setIsOpenVersionInflu] = React.useState(false);

  const [isAllowEdit, setIsAllowEdit] = React.useState(false);
  const [waitedDate, setWaitedDate] = React.useState(0);
  const [timerId, setTimerId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOpenModal = () => {
    // previewInflu={previewInflu}
    // mokPreviewInflu={mokPreviewInflu}
    // if(!previewInflu.isPublish) {
    //   set
    // }
    setIsOpenProfileInflu(true);
  };

  const [sortOption, setSortOption] = React.useState("Choose Option");
  const items = [
    {
      label: (
        <p
          onClick={(e) => {
            setSortOption(e.target.innerText);
          }}
        >
          Monthly
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p
          onClick={(e) => {
            setSortOption(e.target.innerText);
          }}
        >
          Yearly
        </p>
      ),
      key: "1",
    },
  ];
  const handleClose = () => {
    if (isChange) {
      setOpenConfirmForm(true);
    } else {
      setIsOpenProfileInflu(false);
    }
  };

  const handleCloseConfirmForm = () => {
    setOpenConfirmForm(false);
    setIsChange(false);
    setIsOpenProfileInflu(false);
    setPreviewInflu(mokPreviewInflu);
  };

  function is7DaysOrMoreAgo(storedTime) {
    const currentTime = new Date();
    const storedTimeAsDate = new Date(storedTime);
    const timeTo = storedTimeAsDate.setDate(storedTimeAsDate.getDate() + 7);
    const timeDifference = currentTime.getTime() - timeTo;

    return timeDifference;
  }

  // function timeLeft(storedTime) {
  //   const currentTime = new Date();
  //   const storedTimeAsDate = new Date(storedTime);
  //   const timeTo = storedTimeAsDate.setMinutes(
  //     storedTimeAsDate.getMinutes() + 7
  //   );
  //   const range = new Date(timeTo).getMinutes() - currentTime.getMinutes();

  //   console.log(
  //     new Date(timeTo).getDate(),
  //     currentTime.getDate(),
  //     range
  //     );

  //   return Math.ceil(6.5 - range);
  // }

  function timeLeft(storedTime) {
    const currentTime = new Date();
    const currentMonth = currentTime.getMonth();
    const currentYear = currentTime.getFullYear();

    const storedTimeAsDate = new Date(storedTime);
    let storedTimeAsDateMonth = storedTimeAsDate.getMonth();
    let storedTimeAsDateYear = storedTimeAsDate.getFullYear();

    let range;

    if (
      currentYear === storedTimeAsDateYear &&
      currentMonth === storedTimeAsDateMonth
    ) {
      return (range = currentTime.getDate() - storedTimeAsDate.getDate());
    } else if (
      currentYear > storedTimeAsDateYear ||
      (currentYear === storedTimeAsDateYear &&
        currentMonth > storedTimeAsDateMonth)
    ) {
      return (range = Math.ceil(
        (currentTime - storedTimeAsDate) / (1000 * 60 * 60 * 24)
      ));
    }
    return Math.max(range, 0);
  }

  const countDown = () => {
    setWaitedDate(() => {
      if (timeLeft(localStorage.getItem("editDate")) < 7) {
        return timeLeft(localStorage.getItem("editDate"));
      } else return 7;
    });
    setIsLoading(true);
    if (is7DaysOrMoreAgo(localStorage.getItem("editDate")) > 0) {
      setIsAllowEdit(true);
    }
  };

  useEffect(() => {
    let intervalId = null;

    if (!isAllowEdit) {
      intervalId = setInterval(countDown, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAllowEdit]);

  const countTime = () => {
    if (is7DaysOrMoreAgo(localStorage.getItem("editDate")) > 0) {
      setIsAllowEdit(true);
      // console.log("out");
    }
  };

  useEffect(() => {
    let intervalIdTime = null;

    if (!isAllowEdit) {
      intervalIdTime = setInterval(countTime, 1000 * 60 * 60 * 24);
    }

    return () => {
      if (intervalIdTime) {
        clearInterval(intervalIdTime);
      }
    };
  }, [isAllowEdit]);

  // useEffect(() => {
  //   const maxWaitedDate = 7;
  //   const currentDate = new Date().getTime();
  //   const editDate = localStorage.getItem("editDate");
  //   const differenceInDays = is7DaysOrMoreAgo(editDate);

  //   if (differenceInDays > maxWaitedDate) {
  //     setWaitedDate(maxWaitedDate);
  //   } else {
  //     setWaitedDate(differenceInDays);
  //   }
  // }, []);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  React.useEffect(() => {
    axios
      .post("http://localhost:4000/api/influ/dataReportInfluencer", {
        email: user.email,
      })
      .then((response) => {
        const info = response?.data.Influencer;

        setProfileVersion(info);
        setPreviewInflu(() => {
          return info?.sort(
            (a, b) =>
              new Date(b?.dateEdit).getTime() - new Date(a?.dateEdit).getTime()
          )[0];
        });

        setMokPreviewInflu(() => {
          return info?.sort(
            (a, b) =>
              new Date(b?.dateEdit).getTime() - new Date(a?.dateEdit).getTime()
          )[0];
        });
        setOldVerInflu(() => {
          return info?.find((item) => item?.isPublish);
        });
      })
      .catch((error) => {
        console.error("Error while fetching profile information:", error);
      })
      .finally(() => {
        setIsChange(false);
      });
  }, [force]);

  return (
    <>
      {/* -----------------Modal confirm---------------------- */}
      <Modal
        centered
        icon={ExclamationCircleOutlined}
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <ExclamationCircleOutlined
              style={{ marginRight: "5px", color: "#faad14" }}
            />
            <p>Confirm</p>
          </div>
        }
        open={openConfirmForm}
        onOk={handleCloseConfirmForm}
        onCancel={() => setOpenConfirmForm(false)}
        okText="Ok"
        cancelText="Cancel"
        width="400px"
      >
        <div style={{ padding: "10px 40px" }}>
          <p>Sure to cancel?</p>
        </div>
      </Modal>
      {/* -----------------Modal version---------------------- */}
      <Modal
        className="custom-modal"
        centered
        open={isOpenVersionInflu}
        footer={null}
        onCancel={() => {
          setIsOpenVersionInflu(false);
        }}
        width={1400}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluVersionModal
          profileInflu={reportVersion}
          profileSideBar={oldVerInflu}
        />
      </Modal>

      {/* -----------------Modal update---------------------- */}

      <Modal
        className="custom-modal"
        centered
        open={isOpenProfileInflu}
        footer={null}
        afterClose={handleClose}
        onCancel={handleClose}
        width={1400}
        bodyStyle={{ borderRadius: "30px" }}
      >
        <InfluUpdateProfileModal
          setWaitedDate={setWaitedDate}
          setIsAllowEdit={setIsAllowEdit}
          isChange={isChange}
          setIsChange={setIsChange}
          previewInflu={previewInflu}
          mokPreviewInflu={mokPreviewInflu}
          setPreviewInflu={setPreviewInflu}
          previewBooking={previewBooking}
          setPreviewBooking={setPreviewBooking}
          idJobsRemove={idJobsRemove}
          setIdJobsRemove={setIdJobsRemove}
          previewChart={previewChart}
          oldVerInflu={oldVerInflu}
          setPreviewChart={setPreviewChart}
          setForce={setForce}
          setIsOpenProfileInflu={setIsOpenProfileInflu}
        />
      </Modal>
      <div className="influencer-report-layout">
        <div className="influencer-report-title">
          <p>VERSION REPORT</p>
          <div className="report-filter">
            <div className="report-sort-by">
              <Dropdown menu={{ items }} trigger={"click"}>
                <a>
                  <Space>Monthly</Space>
                </a>
              </Dropdown>
              <DownOutlined />
            </div>
          </div>
        </div>

        <div className="update-block">
          <Progress
            percent={(waitedDate / 7) * 100}
            format={() => {
              if (!isLoading) {
                return <Spin indicator={antIcon} />;
              } else if (waitedDate >= 7) {
                return `Ready to update`;
              } else return `${waitedDate} Days`;
            }}
            steps={7}
            strokeColor={[
              "#108ee9",
              "#359eea",
              "#54b0ce",
              "#4aaeaa",
              "#5ab798",
              "#73c57d",
              "#87d068",
            ]}
          />
          <Buttons
            className="update-btn"
            text="Update Now"
            icon={<IconArrow />}
            onClick={() => {
              // if (isAllowEdit) {
              handleOpenModal();
              // }
            }}
          />
        </div>

        <div className="influencer-report-list">
          <List
            grid={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            pagination={{
              onChange: (page) => {
                console.log(page);
              },

              pageSize: 6,
              position: "bottom",
              align: "center",
            }}
            dataSource={profileVersion}
            renderItem={(item) => (
              <List.Item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "423px",
                  height: "270px",
                }}
                onClick={() => {
                  setIsOpenVersionInflu(true);
                  setReportVersion(item);
                }}
              >
                <InfluencerProfileCard
                  profileInflu={item}
                  previewInflu={previewInflu}
                  oldVerInflu={oldVerInflu}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};
export default InfluencerReportLayout;
