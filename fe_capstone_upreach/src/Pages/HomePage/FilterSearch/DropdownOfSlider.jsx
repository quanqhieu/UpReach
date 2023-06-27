import React, { useState } from 'react';
import { Button, Dropdown, Slider } from "antd";
import ButtonDropdow from './ButtonDropdow';

const DropdownOfSlider = ({ titleBtn, marks, isDraggable, defaultValue }) => {
    const [value, setValue] = useState();

    //func khi kéo thì sẽ set data
    const hanndleOnChange = (sliderValue) => {
        setValue(sliderValue)
    }
    //func về lại ban đầu
    const handleBtnClear = () => {
        setValue(defaultValue)
    }

    return (
        <Dropdown
            dropdownRender={() => (
                <div className="popupFilter mt-2 width-400 shadowBox">
                    <div className="fw-bold">{titleBtn}</div>
                    <Slider
                        marks={marks}
                        range={{ draggableTrack: isDraggable }}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={hanndleOnChange}
                    />
                    <Button className="fw-bold mt-4" onClick={handleBtnClear}>Clear</Button>
                </div>
            )}
        >
            <a onClick={(e) => e.preventDefault()}>
                <ButtonDropdow titleBtn={titleBtn} />
            </a>
        </Dropdown>
    )
}

export default DropdownOfSlider
