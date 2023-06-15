import React from "react";
import "../../CSS/Theme.css";
import "./HomePage.css";
import Card_hot_list from "./Card_hot_list";
import Buttons from "../../Components/UI/Buttons";
import { SUB_TITLE, CONTENT, CONTENT_SEARCH } from "./Constant";
import { ReactComponent as IconSearch } from "../../../src/Assets/Icon/Search_icon.svg";
import { ReactComponent as IconApplication } from "../../../src/Assets/Icon/IconApplication.svg";
import { ReactComponent as SonTungBackground } from "../../../src/Assets/Icon/SonTungBackground.svg";
import { ReactComponent as IconArrow } from "../../../src/Assets/Icon/IconArrow.svg";
import { ReactComponent as CardInfo } from "../../../src/Assets/Icon/CardInfo.svg";
import { ReactComponent as IconDoubleCheck } from "../../../src/Assets/Icon/IconDoubleCheck.svg";
import { ReactComponent as TotalContent } from "../../../src/Assets/Icon/TotalContent.svg";

function renderConentTitle() {
  return (
    <div className="col-10 container">
      <div className="row">
        <div className="col-7 mt-4">
          <div className="row mt-5">
            <div className="col-12 homePageTextTitle">
              Find and Hire{" "}
              <p className="homePageTextTitleHighlight">
                Influencers <p className="homePageTextTitle">in Seconds.</p>
              </p>
            </div>
            <div className="col-9 contentSubTitle my-4">{SUB_TITLE}</div>
            <div className="col-5 input-left ps-4 pt-1 my-3 shadow">
              <div className="font-size-15">{CONTENT_SEARCH[0].name}</div>
              <div className="font-size-12">{CONTENT_SEARCH[0].title}</div>
            </div>
            <div className="col-7 input-right ps-2 pt-1 my-3 shadow">
              <div className="row">
                <div className="col-9" style={{ width: "80%" }}>
                  <div className="font-size-15">{CONTENT_SEARCH[1].name}</div>
                  <div className="font-size-12">{CONTENT_SEARCH[1].title}</div>
                </div>
                <div className="col-1 ms-5">
                  <Buttons
                    className="backgroundDark ms-4 mt-1"
                    shape="circle"
                    icon={<IconSearch />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 pb-5">
          <div className="imageSVG ms-5 p-0">
            <div className="imageIconApplication">
              <IconApplication />
            </div>
            <div className="imageSonTungBackground">
              <SonTungBackground />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderHeaderContent() {
  return (
    <div className="row pt-5">
      <div className="col-1"></div>
      {renderConentTitle()}
      <div className="col-1"></div>
      <div className="col-12">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 ms-5 text-center">
            <Buttons
              className="bntDiscover"
              text="Discover Now"
              icon={<IconArrow />}
            />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  )
}

const Index_Homepage = () => {
  return (
    <div className="contentHomePage backgroundPage">
      {renderHeaderContent()}
      {/*================================================================ TAB 2 =========================================================*/}
      <div className="row pt-5 ms-5">
        <div className="col-11 pt-5">
          <div className="row pt-5">
            <div className="col-5 pt-4">
              <CardInfo />
            </div>
            <div className="col-7 pt-5">
              <div className="homePageTextTitleHighlight text-center pt-2 ">
                {CONTENT[0]}
              </div>
              <div className="subTitle font-Volkhov margin-left-110 my-4">
                {CONTENT[1]}
              </div>
              <div className="font-size-16 font-Poppins margin-left-110 my-4">
                {<IconDoubleCheck />} {CONTENT[2]}
              </div>
              <div className="font-size-16 font-Poppins margin-left-110 my-4">
                {<IconDoubleCheck />} {CONTENT[3]}
              </div>
            </div>
            <div className="col-12">
              <TotalContent />
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {/*================================================================ TAB 3 =========================================================*/}
      <div className="row pt-5 ms-5">
        <Card_hot_list />
      </div>
    </div>
  );
};

export default Index_Homepage;
