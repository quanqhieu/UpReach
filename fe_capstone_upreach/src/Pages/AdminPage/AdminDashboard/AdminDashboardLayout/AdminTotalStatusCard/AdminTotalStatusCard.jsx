import React from "react";
import "./AdminTotalStatusCard.css";
import AdminStatusCard from "../../../../../Components/AdminStatusCard/AdminStatusCard";
import { Row, Col } from "antd";
import { Icon } from "@iconify/react";
import { ReactComponent as StatusInflu } from "../../../../../Assets/Icon/AdminStatusInflu.svg";
import { ReactComponent as StatusList } from "../../../../../Assets/Icon/AdminStatusList.svg";
import { ReactComponent as StatusChannel } from "../../../../../Assets/Icon/AdminStatusChannel.svg";
import { ReactComponent as StatusUser } from "../../../../../Assets/Icon/AdminStatusUser.svg";
const AdminTotalStatusCard = () => {
  return (
    <>
      <div className="admin-total-status-card-bg">
        <Row gutter={[32, 32]}>
          <Col span={6}>
            <AdminStatusCard
              title={"Influencers"}
              value={12.001}
              className="totalUserCard"
              icon={
                <Icon
                  icon="vaadin:user-star"
                  color="white"
                  width="28"
                  height="26"
                />
              }
            />
          </Col>
          <Col span={6}>
            <AdminStatusCard
              title={"Lists"}
              value={2.074}
              className="totalUserCard"
              icon={
                <Icon icon="ion:list" color="white" width="32" height="32" />
              }
            />
          </Col>
          <Col span={6}>
            <AdminStatusCard
              title={"Channels"}
              value={16.701}
              className="totalUserCard"
              icon={
                <Icon
                  icon="ph:television-bold"
                  color="white"
                  width="32"
                  height="32"
                />
              }
            />
          </Col>
          <Col span={6}>
            <AdminStatusCard
              title={"Users"}
              value={10.121}
              className="totalUserCard"
              icon={
                <Icon
                  icon="majesticons:user"
                  color="white"
                  width="32"
                  height="32"
                />
              }
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminTotalStatusCard;
