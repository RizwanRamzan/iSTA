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
      <div className="instituteHeader">
        <div className="instituteSubHeader">
          <p className="istaText ">{item?.name}</p>
          <p className="explore">Explore</p>
        </div>
      </div>
      <div className="institute-text-area">
        <div className="institute-left">
          {item?.name == "iSTA Institute" && (
            <p className="institute-text">
              Pakistan’s No.1
              <br />
              IT Training Institute
            </p>
          )}
          {item?.name == "iSTA Solutions" && (
            <p className="institute-text">
              Unlock the Ideal
              <br />
              IT Service, Right Now!
            </p>
          )}
          {item?.name == "iSTA IT Shop" && (
            <p className="institute-text">
              Your Source for
              <br />
              IT Accessories
            </p>
          )}
          <div className="buttons">
            <p className="srevice">Services</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button>{item?.button1}</button>
              <button>{item?.button2}</button>
              {item?.button3 && <button>{item?.button3}</button>}
            </div>
          </div>
          <p className="institute-des">{item?.des}</p>
        </div>
        <div className="institute-right">
          <img src={item?.image} />
        </div>
      </div>
    </div>
  );
};

export default InstituteContainer;
