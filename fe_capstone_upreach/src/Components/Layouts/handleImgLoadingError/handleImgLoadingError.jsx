import DefaultImg from "../../../Assets/Image/Default/DefaultImg.jpg";
const handleImgLoadingError = () => {
  return (
    <div>
      <img onError={(e) => (e.target.src = { DefaultImg })} />
    </div>
  );
};
export default handleImgLoadingError;
