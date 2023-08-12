import React from "react";
import "./VersionInfluImage.css";
const VersionInfluImage = (influInfo) => {
  console.log(influInfo);
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    setImages(influInfo?.influInfo.Image);
  }, [influInfo?.influInfo.Image]);
  return (
    <>
      <div className="approve-influ-images">
        {images?.map((imageObj, index) => (
          <img key={index} className="influ-image" src={imageObj.url} alt="" />
        ))}
      </div>
    </>
  );
};
export default VersionInfluImage;
