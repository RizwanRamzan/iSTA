import { ReactSVG } from "react-svg";
import "./isttaaCard.scss";
import { IsttaaIcon } from "../../../assets";

const IsttaaCard = ({ title, style }) => {
  return (
    <div style={style} className="isttaaCard">
      <div className="card">
        <div
          className={
            (title == "Solutions" && "solutions") ||
            (title == "Store" && "store")
          }
        >
          <ReactSVG width={100} src={IsttaaIcon} color="red" />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default IsttaaCard;
