import React from "react";
import "./InfluImage.css";
const InfluImage = ({ influInfo }) => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    setImages(influInfo?.dataImage);
  }, [influInfo?.dataImage]);
  return (
    <>
      <div className="approve-influ-images">
        {images
          ?.filter(
            (imageObj) => imageObj.image !== null && imageObj.imageId !== null
          )
          .map((imageObj, index) => (
            <img
              key={index}
              className="influ-image"
              src={imageObj.image}
              alt=""
            />
          ))}
      </div>
    </>
  );
};
export default InfluImage;
