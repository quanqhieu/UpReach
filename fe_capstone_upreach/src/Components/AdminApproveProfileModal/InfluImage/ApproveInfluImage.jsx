import React from "react";
import default_img from "../../../Assets/Image/Default/DefaultImg.jpg";
import "./ApproveInfluImage.css";
const ApproveInfluImage = (influInfo) => {
  const [images, setImages] = React.useState(influInfo.influInfo.image);

  return (
    <>
      <div className="approve-influ-images">
        {images.map((imageObj, index) => (
          <img
            key={index}
            className="influ-image"
            src={imageObj.Image}
            alt=""
          />
        ))}
        <img
          className="influ-image"
          src={
            "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c1/Nh%C3%A2n_v%E1%BA%ADt_v%E1%BA%BD_theo_phong_c%C3%A1ch_anime_-_manga_%C4%91%C6%B0%E1%BB%A3c_t%E1%BA%A1o_t%E1%BB%B1_%C4%91%E1%BB%99ng_b%E1%BB%9Fi_AI_%282%29.jpeg/484px-Nh%C3%A2n_v%E1%BA%ADt_v%E1%BA%BD_theo_phong_c%C3%A1ch_anime_-_manga_%C4%91%C6%B0%E1%BB%A3c_t%E1%BA%A1o_t%E1%BB%B1_%C4%91%E1%BB%99ng_b%E1%BB%9Fi_AI_%282%29.jpeg"
          }
          alt=""
        />
      </div>
    </>
  );
};
export default ApproveInfluImage;
