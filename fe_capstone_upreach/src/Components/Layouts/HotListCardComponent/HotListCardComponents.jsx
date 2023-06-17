import "./HotListCardComponents.css";

const HotListCardComponents = ({ image, name, topics }) => {
  return (
    <div className="hotListItems">
      <div className="hotListImage">{image}</div>
      <div className="hotListCardContent">
        <p className="hotListName">{name}</p>
        <p className="hotListTopics">{topics}</p>
      </div>
    </div>
  );
};
export default HotListCardComponents;
