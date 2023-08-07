import React from "react";
import "./InfluencerBookingLayout.css";
import InfluencerBookingCard from "../../../../Components/InfluencerBookingCard/InfluencerBookingCard";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Modal } from "antd";
const InfluencerBookingLayout = () => {
  const [sortOption, setSortOption] = React.useState("Choose Option");
  const items = [
    {
      label: (
        <p
          onClick={(e) => {
            setSortOption(e.target.innerText);
          }}
        >
          Name
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
          Date
        </p>
      ),
      key: "1",
    },
    {
      label: (
        <p
          onClick={(e) => {
            setSortOption(e.target.innerText);
          }}
        >
          Cost
        </p>
      ),
      key: "2",
    },
  ];
  const [bookingList, setBookingList] = React.useState([
    {
      name: "Hieu",
      brandName: "NoFear",
      platform: "Facebook",
      content: "Picture",
      quantities: 1,
      status: "Pending",
      createdDate: "10/07/2023",
      costFrom: 800000,
      costTo: 1000000,
      linkBook: "facebook.com",
      describes: "deptraicogisai",
      startDate: "26 / 8 / 2023",
      endDate: "28 / 8 / 2023",
    },
    {
      name: "Minh",
      brandName: "Manh",
      platform: "Instagram",
      content: "Video",
      quantities: 1,
      status: "Pending",
      createdDate: "11/07/2023",
      costFrom: 900000,
      costTo: 1200000,
      linkBook: "facebook.com",
      describes: "xau trai qua",
      startDate: "26 / 8 / 2023",
      endDate: "28 / 8 / 2023",
    },
    {
      name: "Khoa",
      brandName: "FSoft",
      platform: "Tiktok",
      content: "Picture",
      quantities: 1,
      status: "Pending",
      createdDate: "12/07/2023",
      costFrom: 1200000,
      costTo: 1500000,
      linkBook: "facebook.com/khoadeptrai",
      describes: "Tester co tam",
      startDate: "26 / 8 / 2023",
      endDate: "28 / 8 / 2023",
    },
    {
      name: "Huy",
      brandName: "NoFear",
      platform: "Facebook",
      content: "Picture",
      quantities: 1,
      status: "Pending",
      createdDate: "12/07/2023",
      costFrom: 10000,
      costTo: 20000,
      linkBook: "facebook.com/huyga",
      describes: "con ga",
      startDate: "26 / 8 / 2023",
      endDate: "28 / 8 / 2023",
    },
  ]);

  const hanldeSort = (bookingList) => {
    if (sortOption === "Name") {
      return bookingList.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortOption === "Date") {
      return bookingList.sort((a, b) => {
        const dateA = new Date(a.createdDate);
        const dateB = new Date(b.createdDate);

        return dateB - dateA;
      });
    }
    // else if (sortOption === "Cost") {
    //   return bookingList.sort((a, b) => {
    //     return a.cost - b.cost;
    //   });
    // }
    else return bookingList;
  };

  return (
    <>
      <div className="influencer-booking-layout">
        <div className="influencer-booking-title">
          <p>LIST BOOKING</p>
          <div className="booking-filter">
            <p>Sort by:</p>
            <div className="booking-sort-by">
              <Dropdown menu={{ items }} trigger={"click"}>
                <a>
                  <Space>{sortOption}</Space>
                </a>
              </Dropdown>
              <DownOutlined />
            </div>
          </div>
        </div>
        <div className="influencer-booking-sub-title">
          <p style={{ width: "14.6%" }}>Name</p>
          <p style={{ width: "18.8%" }}>Brand Name</p>
          <p style={{ width: "12.1%" }}>Platform</p>
          <p style={{ width: "14.5%" }}>Content</p>
          <p style={{ width: "12.9%" }}>Quantities</p>
          <p style={{ width: "12.4%" }}>Status</p>
          <p style={{ width: "15%" }}>Created Date</p>
        </div>
        <div className="influencer-booking-list">
          {hanldeSort(bookingList)?.map((booking, index) => (
            <div className="mb-3" key={index}>
              <InfluencerBookingCard bookingList={booking} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfluencerBookingLayout;
