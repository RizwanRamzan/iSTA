import { Button } from "antd";
import { EduIcon, SolutionIcon, StroeIcon } from "../../assets";
import "./institute.scss";

const InstituteContainer = ({ item }) => {
  return (
    <div
      className={
        (item.name == "isttaa Institute" && "instituteContainer") ||
        (item.name == "isttaa Solutions" && "solutionContainer") ||
        (item?.name == "isttaa IT Shop" && "shopContainer")
      }
    >
      <div className="institute-text-area">
        <div className="institute-left">
          <div className="buttons">
            <img
              width={"50%"}
              src={
                (item?.name == "isttaa Institute" && EduIcon) ||
                (item?.name == "isttaa Solutions" && SolutionIcon) ||
                (item?.name == "isttaa IT Shop" && StroeIcon)
              }
              alt=""
            />
          </div>
          {item?.name == "isttaa Institute" && (
            <>
              <h2 className="EduTitle">
                <span>Learn</span> To <span>Earn</span>
                <br /> With Us!
              </h2>
              <Button type="primary" style={{ width: "200px" }}>
                Visit Website
              </Button>
            </>
          )}

          {item?.name == "isttaa Solutions" && (
            <>
              <h2 className="SolutionTitle">
                Your <span>Vision</span> <br />
                <span>Our </span>
                Code
              </h2>
              <Button
                type="primary"
                style={{ width: "200px", backgroundColor: "#2DA14B" }}
              >
                Visit Website
              </Button>
            </>
          )}

          {item?.name == "isttaa IT Shop" && (
            <>
              <h2 className="StoreTitle">
                Shop <span>Smart</span> <br />
                <span>Shop </span> Online
              </h2>
              <Button type="primary" style={{ width: "200px",backgroundColor: "#FF9900" }}>
                Visit Website
              </Button>
            </>
          )}
        </div>
        <div className="institute-right">
          <div className="box">
            <img src={item?.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteContainer;
