import React from "react";
import "./AdminDashboardLayout.css";
// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";
import AdminTotalStatusCard from "./AdminTotalStatusCard/AdminTotalStatusCard";
import AdminTopCards from "./AdminTopCards/AdminTopCards";
import AdminTopIncome from "./AdminTopIncome/AdminTopIncome";

const AdminDashboardLayout = () => {
  // const [sortOption, setSortOption] = React.useState("Choose Option");
  // const items = [
  //   {
  //     label: (
  //       <p
  //         onClick={(e) => {
  //           setSortOption(e.target.innerText);
  //         }}
  //       >
  //         Monthly
  //       </p>
  //     ),
  //     key: "0",
  //   },
  //   {
  //     label: (
  //       <p
  //         onClick={(e) => {
  //           setSortOption(e.target.innerText);
  //         }}
  //       >
  //         Year
  //       </p>
  //     ),
  //     key: "1",
  //   },
  // ];
  return (
    <>
      <div className="admin-dashboard-layout">
        <div className="admin-dashboard-title">
          <p>OVERVIEW</p>
          {/* <div className="dashboard-filter">
            <p>Sort by:</p>
            <div className="dashboard-sort-by">
              <Dropdown menu={{ items }} trigger={"click"}>
                <a>
                  <Space>{sortOption}</Space>
                </a>
              </Dropdown>
              <DownOutlined />
            </div>
          </div> */}
        </div>
        <div className="admin-total-status">
          <AdminTotalStatusCard />
        </div>
        <div className="admin-top">
          <div className="admin-top-cards">
            <AdminTopCards />
          </div>
          <div className="admin-top-income">
            <AdminTopIncome />
          </div>
        </div>
        <div className="upgrade-packages">
          <div className="upgrade-package-free">
            <div className="upgrade-package-header">
              <p>Free</p>
              <p>0 VND/month</p>
            </div>
            <div className="upgrade-package-body">
              <div className="upgrade-package-body-line">
                <p>Package:</p>
                <p>0 VND/month</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>View report:</p>
                <p>10</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>Search:</p>
                <p>20</p>
              </div>
            </div>
            <div className="upgrade-package-footer">Edit</div>
          </div>
          <div className="upgrade-package-starter">
            <div className="upgrade-package-header">
              <p>Starter</p>
              <p>199.000 VND/month</p>
            </div>
            <div className="upgrade-package-body">
              <div className="upgrade-package-body-line">
                <p>Package:</p>
                <p>199.000 VND/month</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>View report:</p>
                <p>20</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>Search:</p>
                <p>200</p>
              </div>
            </div>
            <div className="upgrade-package-footer">Edit</div>
          </div>
          <div className="upgrade-package-business">
            <div className="upgrade-package-header">
              <p>Business</p>
              <p>299.000 VND/month</p>
            </div>
            <div className="upgrade-package-body">
              <div className="upgrade-package-body-line">
                <p>Package:</p>
                <p>299.000 VND/month</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>View report:</p>
                <p>500</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>Search:</p>
                <p>1000</p>
              </div>
            </div>
            <div className="upgrade-package-footer">Edit</div>
          </div>
          <div className="upgrade-package-gold">
            <div className="upgrade-package-header">
              <p>Gold</p>
              <p>499.000 VND/month</p>
            </div>
            <div className="upgrade-package-body">
              <div className="upgrade-package-body-line">
                <p>Package:</p>
                <p>499.000 VND/month</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>View report:</p>
                <p>1000</p>
              </div>
              <div className="upgrade-package-body-line">
                <p>Search:</p>
                <p>3000</p>
              </div>
            </div>
            <div className="upgrade-package-footer">Edit</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboardLayout;
