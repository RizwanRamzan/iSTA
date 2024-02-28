import React from "react";
import "./diplomaCertification.scss";
import { DiplomaCardAPI } from "./constant";

const DiplomaCertification = () => {
  return (
    <>
      <div className="diploma">
        <div className="diploma__content">
          <h1> 1 Year Diploma Certification </h1>
          <div className="diploma__cards">
            {DiplomaCardAPI.map((el) => (
              <>
                <div className="diploma_card_wrapper">
                  <div className="diploma_card">
                    <img src={el.img} alt="" />
                    <p> {el.desc} </p>
                    <h3> {el.title} </h3>
                  </div>
                  <button className="read_more_btn"> Read More </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiplomaCertification;
