import React from "react";
import "./FilterSearch.css";
import "../../../CSS/Theme.css";
import "../HomePage.css";
import { Button, Dropdown, Space, Slider, Row, Col, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Selects from "../../../Components/UI/Selects";
import {
  LIST_CONTENT_FORMATS_SEARCH,
  LIST_SELECT_SEARCH,
  LIST_TYPE_SEARCH,
} from "../ConstHomePage";

function RenderSelectSearch({
  className,
  options,
  title,
  description,
  onChange,
}) {
  return (
    <Selects
      className={"searchCategoryBtn " + className}
      mode="multiple"
      options={options}
      onChange={onChange}
      placeholder={
        <>
          <p className="searchTitle">{title}</p>
          <p className="searchDescription">{description}</p>
        </>
      }
    />
  );
}

function RenderListCheckbox({ valueCheckbox, titleCheckbox }) {
  return (
    <Col span={24}>
      <Checkbox value={valueCheckbox}>{titleCheckbox}</Checkbox>
    </Col>
  );
}

function RenderCheckBoxGroup({ listItemCheckBox }) {
  return (
    <>
      <Checkbox.Group
        style={{
          width: "100%",
        }}
      >
        <Row>
          {listItemCheckBox.map((item) => (
            <RenderListCheckbox
              valueCheckbox={item.value}
              titleCheckbox={item.name}
            />
          ))}
        </Row>
      </Checkbox.Group>
      <Button className="fw-bold mt-4">Clear</Button>
    </>
  );
}

function ButtonDropdow({ titleBtn }) {
  return (
    <Button
      className="dropdowSlider bg-white"
      style={{
        width: "100%",
      }}
    >
      <Space>
        {titleBtn} <DownOutlined />
      </Space>
    </Button>
  );
}

function RenderDropdownOfCheckBox({ listItemCheckBox, titleBtn, className }) {
  return (
    <Dropdown
      dropdownRender={() => (
        <div className={"popupFilter mt-2 shadowBox" + className}>
          <RenderCheckBoxGroup listItemCheckBox={listItemCheckBox} />
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <ButtonDropdow titleBtn={titleBtn} />
      </a>
    </Dropdown>
  );
}

function RenderFilter() {
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
  return (
    <>
      <div className="col-1"></div>
      <div className="col-10 d-flex">
        {/* Filter of Type */}
        <div className="mt-4 backgroundMainPage">
          <RenderDropdownOfCheckBox
            listItemCheckBox={LIST_TYPE_SEARCH}
            titleBtn="Type"
          />
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
        {/* Filter of Content Formats */}
        <div className="mt-4 ms-2 backgroundMainPage">
          <RenderDropdownOfCheckBox
            className="width-100-percent"
            listItemCheckBox={LIST_CONTENT_FORMATS_SEARCH}
            titleBtn="Content Formats"
          />
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
                      <Selects
                        className="inputSelect"
                        mode="multiple"
                        // options={options}
                        placeholder="Location"
                      />
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
}

const FilterSearch = () => {
  const handleChange = (value) => {
    console.log(`selected: ${value}`);
  };

  return (
    <>
      <div className="col-2 backgroundMainPage"></div>
      <div className="col-1"></div>
      <div className="col-10">
        <div className="searchBtns">
          {LIST_SELECT_SEARCH.map((item) => (
            <RenderSelectSearch
              className={item.className}
              options={item.options}
              title={item.title}
              description={item.description}
              onChange={handleChange}
            />
          ))}
          <Button className="bntSreach ms-3">Search</Button>
        </div>
      </div>
      <div className="col-1"></div>
      <RenderFilter />
    </>
  );
};

export default FilterSearch;
