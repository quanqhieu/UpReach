import React from "react";
import "./FilterSearch.css";
import "../../../CSS/Theme.css";
import "../HomePage.css";
import {
  Button,
  Select,
  Dropdown,
  Space,
  Slider,
  Row,
  Col,
  Checkbox,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

const FilterSearch = () => {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  // marks for slider
  const marks = {
    0: {
      style: {
        paddingTop: "10px",
      },
      label: <strong>0(%)</strong>,
    },
    100: {
      style: {
        paddingTop: "10px",
      },
      label: <strong>100(%)</strong>,
    },
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <div className="col-1"></div>
      <div className="col-10 d-flex">
        {/* Filter 1 */}
        <div className="mt-4 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 shadowBox">
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                >
                  <Row>
                    <Col span={24}>
                      <Checkbox value="A">Celebrity</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="B">Talent</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="C">Professional</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="D">Citizen</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="E">Community</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Type <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 2 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-400 shadowBox">
                <div className="fw-bold">Cost</div>
                <Slider
                  marks={marks}
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Cost Estimate <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 3 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-400 shadowBox">
                <div className="fw-bold">Cost</div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[0, 60]}
                />
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Age <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 4 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-400 shadowBox">
                <div className="fw-bold">Cost</div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Followers <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 5 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-400 shadowBox">
                <div className="fw-bold">Cost</div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Engagement <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 6 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-400 shadowBox">
                <div className="fw-bold">Cost</div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[20, 50]}
                />
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Publications <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 7 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-100-percent shadowBox">
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                >
                  <Row>
                    <Col span={24}>
                      <Checkbox value="Text">Text</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="Picture">Picture</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="Video">Video</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                <Button className="fw-bold mt-4">Clear</Button>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white shadowBox"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Content Formats <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
        {/* Filter 8 */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <Dropdown
            dropdownRender={() => (
              <div className="popupFilter mt-2 width-400 shadowBox p-3">
                <div className="row">
                  <div className="col-12">
                    {/* Filter Age of audiance */}
                    <div className="fw-bold">Audiance Age</div>
                    <Slider
                      range={{ draggableTrack: true }}
                      defaultValue={[20, 50]}
                    />
                  </div>
                  {/* Filter gender of audiance */}
                  <div className="col-12">
                    <div className="fw-bold">Audience Gender</div>
                    <Checkbox.Group
                      style={{
                        width: "100%",
                      }}
                    >
                      <Row>
                        <Col span={24}>
                          <Checkbox value="A">Male</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value="B">Female</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value="C">Other</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </div>
                  {/* Filter location of audiance */}
                  <div className="col-12 mt-3">
                    <div className="fw-bold">Audience Locations</div>
                    <div className="selectFilterAudiance">
                      <Select
                        className="inputSelect"
                        // placeholder="searchTitle"
                        mode="multiple"
                        options={options}
                        placeholder="Location"
                      ></Select>
                    </div>
                  </div>
                  <div className="col-4">
                    <Button className="fw-bold mt-4">Clear</Button>
                  </div>
                </div>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Button
                className="dropdowSlider bg-white"
                style={{
                  width: "100%",
                }}
              >
                <Space>
                  Audience
                  <DownOutlined />
                </Space>
              </Button>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="col-1"></div>
    </>
  );
};

export default FilterSearch;
