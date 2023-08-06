import React, { useState, useEffect } from "react";
import { Button, Dropdown, Slider } from "antd";
import ButtonDropdown from "./ButtonDropdown";

const DropdownOfSlider = ({
  titleBtn,
  marks,
  isDraggable,
  defaultValue,
  min,
  max,
  step,
  checkClearAll,
  dataSearch,
  setDataSearch,
}) => {
  const [value, setValue] = useState();

  //func khi kéo thì sẽ set data
  const hanndleOnChange = (sliderValue) => {
    // set value to search
    // from cost estimate
    if (titleBtn === "Cost Estimate") {
      setDataSearch({ ...dataSearch, costEstimateFrom: sliderValue[0] });
      if (value[0] !== sliderValue[0]) {
        setValue(sliderValue);
        return;
      }
    }
    // to cost estimate
    if (titleBtn === "Cost Estimate") {
      setDataSearch({ ...dataSearch, costEstimateTo: sliderValue[1] });
      setValue(sliderValue);
    }
    // from age
    if (titleBtn === "Age") {
      setDataSearch({ ...dataSearch, ageFrom: sliderValue[0] });
      if (value[0] !== sliderValue[0]) {
        setValue(sliderValue);
        return;
      }
    }
    // to age
    if (titleBtn === "Age") {
      setDataSearch({ ...dataSearch, ageTo: sliderValue[1] });
      setValue(sliderValue);
    }
    // from follower
    if (titleBtn === "Followers") {
      setDataSearch({ ...dataSearch, ageFrom: sliderValue[0] });
      if (value[0] !== sliderValue[0]) {
        setValue(sliderValue);
        return;
      }
    }
    // to follower
    if (titleBtn === "Followers") {
      setDataSearch({ ...dataSearch, ageTo: sliderValue[1] });
      setValue(sliderValue);
    }
    // change background when onchange filter
    document.getElementById(titleBtn).classList.add("active-filter");
  };
  //func về lại ban đầu
  const handleBtnClear = () => {
    setValue(defaultValue);
    // change background when onchange filter
    document.getElementById(titleBtn).classList.remove("active-filter");
  };

  useEffect(() => {
    handleBtnClear();
  }, [checkClearAll]);
  return (
    <Dropdown
      dropdownRender={() => (
        <div className="popupFilter mt-2 width-400 shadowBox hinden-scroll">
          <div className="fw-bold">{titleBtn}</div>
          <Slider
            marks={marks}
            min={min}
            max={max}
            step={step}
            range={{ draggableTrack: isDraggable }}
            defaultValue={defaultValue}
            value={value}
            onChange={hanndleOnChange}
          />
          <Button className="fw-bold mt-4" onClick={handleBtnClear}>
            Clear
          </Button>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <ButtonDropdown
          Id={titleBtn}
          className="background-change-filter"
          titleBtn={titleBtn}
        />
      </a>
    </Dropdown>
  );
};

export default DropdownOfSlider;
